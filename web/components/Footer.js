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

const Footer = ({ categories }) => {
  return (
    <div css={footer}>
      <AboutCard />
      <Categories categories={categories} />
    </div>
  );
};

export default Footer;