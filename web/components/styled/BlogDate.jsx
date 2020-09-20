import React from 'react';
import { css } from '@emotion/core'

const BlogDate = ({ children }) => {
  return (
    <span css={css`color:gray;`}>
      {children}
    </span>
  );
};

export default BlogDate;