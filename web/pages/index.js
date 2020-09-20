import Head from 'next/head'
import Link from 'next/link'

import BlockContentSerialized from '../components/BlockContentSerialized';
import BlogDate from '../components/styled/BlogDate';
import BlogCategories from '../components/styled/BlogCategories';
import PostPreview from '../components/PostPreview';
import Post from '../components/Post';
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

  return (
    <div>
      <Head>
        <title>Better Impermanence - Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {fullPosts.map(post => (
        <Post post={post} key={post._id} />
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
