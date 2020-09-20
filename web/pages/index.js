import Head from 'next/head'
import Link from 'next/link'

import BlockContentSerialized from '../components/BlockContentSerialized';
import BlogDate from '../components/styled/BlogDate';
import PostPreview from '../components/PostPreview';
import { getCategories, getPosts, getAuthors } from '../lib/queries';

export default function Home(props) {
  const { posts } = props;
  const fullPosts = []; // first 3
  const previewPosts = []; // next 7
  posts.forEach((post, index) => {
    if (index <= 2) {
      fullPosts.push(post);
    }
    if (index > 2 && index <= 10) {
      previewPosts.push(post);
    }
  })
  console.log(posts)
  return (
    <div>
      <Head>
        <title>Better Impermanence - Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {fullPosts.map(post => (
        <div key={post._id}>
          <Link href={`/post/${post.slug.current}`}>
            <h2>{post.title}</h2>
          </Link>
          <BlogDate>{new Date(post.publishedAt).toLocaleDateString()}</BlogDate>
          <BlockContentSerialized blocks={post.body} />
        </div>
      ))}
      {previewPosts && previewPosts.map(post => (
        <PostPreview post={post} />
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
