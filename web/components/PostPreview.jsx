import React from 'react';
import Link from 'next/link'
import { css } from '@emotion/core'

import BlockContentSerialized from '../components/BlockContentSerialized';
import BlogDate from '../components/styled/BlogDate';

const PostPreview = ({ post }) => {
  const { _id, title, slug, publishedAt, body } = post;
  const previewBody = [body[0]];
  return (
    <div key={_id}>
      <Link href={`/post/${slug.current}`}>
        <h2>{title}</h2>
      </Link>
      <BlogDate>{new Date(publishedAt).toLocaleDateString()}</BlogDate>
      <BlockContentSerialized blocks={previewBody} />
      <Link href={`/post/${slug.current}`}>
        <a css={css`font-size: 110%;`}>... read more</a>
      </Link>
    </div>
  );
};

export default PostPreview;