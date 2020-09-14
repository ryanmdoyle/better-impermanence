import React from 'react';
import { css } from '@emotion/core';

const siteTitle = css`
  height: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    width: 100%;
    font-size: 3rem;
    text-align: center;
    margin: 0;
    margin-bottom: 0.5rem;
    text-transform: lowercase;
  }
`

const SiteTitle = ({ children, subtitle }) => {
  return (
    <div css={siteTitle}>
      <h1 className='title'>{children}</h1>
      <span>{subtitle}</span>
    </div>
  );
};

export default SiteTitle;