import Head from 'next/head'
import client from '../lib/sanity';
import Link from 'next/link'
import BlockContent from '@sanity/block-content-to-react';

import BlogDate from '../components/styled/BlogDate';
import { getCategories, getPosts } from '../lib/queries';

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Better Impermanence - Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {props.posts.map(post => (
        <div key={post._id}>
          <Link href={`/post/${post.slug.current}`}>
            <h2>{post.title}</h2>
          </Link>
          <BlogDate>{new Date(post.publishedAt).toLocaleDateString()}</BlogDate>
          <BlockContent blocks={post.body} />
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const props = {}
  const cats = await getCategories()
  const posts = await getPosts()
  props.categories = cats
  props.posts = posts
  return { props };
}