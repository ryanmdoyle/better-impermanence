import Head from 'next/head'
import Link from 'next/link'
import BlockContentSerialized from '../components/BlockContentSerialized';

import BlogDate from '../components/styled/BlogDate';
import { getCategories, getPosts, getAuthors } from '../lib/queries';

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
          <BlockContentSerialized blocks={post.body} />
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const props = {}
  const cats = await getCategories()
  const posts = await getPosts()
  const authors = await getAuthors();
  props.categories = cats
  props.posts = posts
  props.author = authors[0]
  return { props };
}
