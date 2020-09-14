import React from 'react';
import Link from 'next/link';

const Categories = ({ categories }) => {
  return (
    <div>
      <h3>Categories</h3>
      <ul>
        {categories && categories.map(category => (
          <li key={category._id}>
            <Link href={`/categories/${category.title.toLowerCase()}`}>
              <a>{category.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;