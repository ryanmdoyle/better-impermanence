import React from 'react';
import Link from 'next/link';

import BlogDate from '../components/styled/BlogDate'
import BlogCategories from '../components/styled/BlogCategories'
import BlockContentSerialized from '../components/BlockContentSerialized'

const Post = ({ post }) => {
  return (
    <div key={post._id}>
      <Link href={`/post/${post.slug.current}`}>
        <h3>{post.title}</h3>
      </Link>
      <BlogDate>{new Date(post.publishedAt).toLocaleDateString()}</BlogDate>
      {/* <BlogCategories categories={post.categories} /> */}
      <BlockContentSerialized blocks={post.body} />
    </div>
  );
};

export default Post;