import React from 'react';
import Head from 'next/head';

import Post from '../../components/Post';
import { getCategoryPosts, getCategories, getAuthors } from '../../lib/queries';

const category = ({ category, categories, context, author }) => {
  const { title, posts } = category[0];
  return (
    <div>
      <Head>
        <title>Better Impermanence - {title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h2>{title}</h2>
      {posts.length === 0 && <p>Currently there are no posts in the {title} category!</p>}
      {posts && posts.map(post => (
        <Post post={post} key={post._id} />
      ))}
    </div>
  );
};

export async function getStaticProps(context) {
  const category = await getCategoryPosts(context.params.slug)
  const categories = await getCategories()
  const authors = await getAuthors();
  return {
    props: { category: category, categories: categories, context: context.params, author: authors[0], }
  }
}

export async function getStaticPaths() {
  const categories = await getCategories()
  const paths = []
  categories.forEach(category => {
    paths.push({
      params: {
        category: category.title.toLowerCase(),
      }
    })
  })
  return { paths: paths, fallback: false }
}

export default category;