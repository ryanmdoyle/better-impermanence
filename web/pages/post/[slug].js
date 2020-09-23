import React from 'react';
import Head from 'next/head'

import Post from '../../components/Post';
import { getPostBySlug, getPosts, getCategories, getAuthors } from '../../lib/queries';

const post = ({ post, categories, author }) => {
  return (
    <>
      <Head>
        <title>Better Impermanence - {post.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Post post={post} />
    </>
  );
};

export async function getStaticProps(context) {
  const post = await getPostBySlug(context.params.slug)
  const categories = await getCategories()
  const authors = await getAuthors();
  return {
    props: { post: post[0], categories: categories, author: authors[0] }
  }
}

export async function getStaticPaths() {
  const posts = await getPosts()
  const paths = []
  posts.forEach(post => {
    paths.push({
      params: {
        slug: post.slug.current,
      }
    })
  })
  return { paths: paths, fallback: false }
}

export default post;