import React from 'react';
import { css } from '@emotion/core';

import AboutCard from '../components/AboutCard'
import Categories from '../components/Categories'

const footer = css`
  width: 100%;
  min-height: 300px;
  display: flex;
  @media (max-width: 900px) {
    flex-direction: column;
    .about, .categories {
      width: 100%;
    }
  }

`

const Footer = ({ categories, author }) => {
  return (
    <div css={footer}>
      <br></br>
      <hr css={css`width: 100%;`}></hr>
      <AboutCard author={author} />
      <Categories categories={categories} />
    </div>
  );
};

export default Footer;