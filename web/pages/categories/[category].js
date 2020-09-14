import React from 'react';
import Head from 'next/head';

import { getPostsByCategory, getCategories, getAuthors } from '../../lib/queries';


const category = ({ posts, categories, context, author }) => {
  const titleString = context.category
  const title = titleString.charAt(0).toUpperCase() + titleString.slice(1);
  return (
    <div>
      <Head>
        <title>Better Impermanence - {title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h2>{title}</h2>
      {posts.length === 0 && <p>Currently there are no posts in the {title} category!</p>}
    </div>
  );
};

export async function getStaticProps(context) {
  const posts = await getPostsByCategory(context.params.slug)
  const categories = await getCategories()
  const authors = await getAuthors();
  return {
    props: { posts: posts, categories: categories, context: context.params, author: authors[0], }
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