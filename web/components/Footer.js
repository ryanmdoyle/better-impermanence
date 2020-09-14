import React from 'react';
import { css } from '@emotion/core';

import AboutCard from '../components/AboutCard'
import Categories from '../components/Categories'

const footer = css`
  width: 100%;
  min-height: 300px;
  display: flex;

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