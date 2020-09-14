import React from 'react';
import { css } from '@emotion/core'

const date = css`
  position: relative;
  top:-10px;
  color: grey;
`

const BlogDate = ({ children }) => {
  return (
    <span css={date}>
      {children}
    </span>
  );
};

export default BlogDate;