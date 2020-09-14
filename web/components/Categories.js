import React from 'react';
import Link from 'next/link';
import { css } from '@emotion/core';

const Categories = ({ categories }) => {
  return (
    <div>
      <h4 css={css`margin: 1rem 0;`}>Categories</h4>
      <ul>
        {categories && categories.map(category => (
          <li key={category._id}>
            <Link href={`/categories/${category.title.toLowerCase()}`}>
              <a css={css`color: var(--black);text-decoration: none;`}>{category.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;