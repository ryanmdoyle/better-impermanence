import React from 'react';
import Link from 'next/link'
import { css } from '@emotion/core'

const BlogCategories = ({ categories }) => {
  return (
    <span css={css`color:grey;`}>
      {' - '}
      {categories.map((category, index) => {
        if (index !== categories.length - 1) {
          return (
            <span key={index}><CategoryWithLink category={category.title}>{category.title}</CategoryWithLink>, </span>
          )
        }
        return (
          <CategoryWithLink category={category.title} key={index}>{category.title}</CategoryWithLink>
        )
      })}
    </span>
  );
};

const CategoryWithLink = ({ children, category }) => {
  return (
    <Link href={`/categories/${category.toLowerCase()}`}>
      <a>{children}</a>
    </Link>
  )
}

export default BlogCategories;