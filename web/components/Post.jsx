import React from 'react';
import Link from 'next/link';
import { css } from '@emotion/core';

import BlogDate from '../components/styled/BlogDate'
import BlogCategories from '../components/styled/BlogCategories'
import BlockContentSerialized from '../components/BlockContentSerialized'

const Post = ({ post }) => {
  return (
    <div key={post._id}>
      <Link href={`/post/${post.slug.current}`}>
        <a css={css`color: var(--black); text-decoration: none;`}>
          <h3>{post.title}</h3>
        </a>
      </Link>
      <BlogDate>{new Date(post.publishedAt).toLocaleDateString()}</BlogDate>
      <BlogCategories categories={post.categories} />
      <BlockContentSerialized blocks={post.body} />
    </div>
  );
};

export default Post;