import React from 'react';
import BlockContent from '@sanity/block-content-to-react';

import BlogDate from '../../components/styled/BlogDate';
import { getPostBySlug, getPosts, getCategories } from '../../lib/queries';

const post = ({ post, categories }) => {
  const { title, publishedAt, body } = post
  return (
    <div>
      <h2>{title}</h2>
      <BlogDate>{new Date(post.publishedAt).toLocaleDateString()}</BlogDate>
      <BlockContent blocks={body} />
    </div>
  );
};

export async function getStaticProps(context) {
  const post = await getPostBySlug(context.params.slug)
  const categories = await getCategories()
  return {
    props: { post: post[0], categories: categories }
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