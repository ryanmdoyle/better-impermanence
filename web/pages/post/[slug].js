import React from 'react';
import Head from 'next/head'
import BlockContent from '@sanity/block-content-to-react';

import BlogDate from '../../components/styled/BlogDate';
import { getPostBySlug, getPosts, getCategories } from '../../lib/queries';

const post = ({ post, categories }) => {
  const { title, publishedAt, body } = post
  return (
    <div>
      <Head>
        <title>Better Impermanence - {title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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