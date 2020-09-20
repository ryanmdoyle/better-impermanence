import React from 'react';
import { css } from '@emotion/core'

import AboutCard from '../components/AboutCard';
import Categories from '../components/Categories';

const Sidebar = ({ categories, author }) => {
  return (
    <div css={css`margin-top: 2.75rem;`}>
      <AboutCard author={author} />
      <Categories categories={categories} />
    </div>
  );
};

export default Sidebar;