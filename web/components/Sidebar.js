import React from 'react';

import AboutCard from '../components/AboutCard';
import Categories from '../components/Categories';

const Sidebar = ({ categories, author }) => {
  return (
    <div>
      <AboutCard author={author} />
      <Categories categories={categories} />
    </div>
  );
};

export default Sidebar;