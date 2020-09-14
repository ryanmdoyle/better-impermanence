import React from 'react';

import AboutCard from '../components/AboutCard';
import Categories from '../components/Categories';

const Sidebar = ({ categories }) => {
  return (
    <div>
      <AboutCard />
      <Categories categories={categories} />
    </div>
  );
};

export default Sidebar;