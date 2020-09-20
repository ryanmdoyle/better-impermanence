import React from 'react';
import Head from 'next/head'

import BlogDate from '../../components/styled/BlogDate';
import BlockContentSerialized from '../../components/BlockContentSerialized';
import Post from '../../components/Post';
import { getPostBySlug, getPosts, getCategories, getAuthors } from '../../lib/queries';

const post = ({ post, categories, author }) => {
  return (
    <Post post={post} />
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