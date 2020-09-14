import React from 'react';

import { getCategories, getPosts } from '../lib/queries';

const formSuccess = () => {
  return (
    <div>
      <h3>Thank you!</h3>
      <p>
        Thanks for getting in touch!
      </p>
    </div>
  );
};

export default formSuccess;

export async function getStaticProps() {
  const props = {}
  const cats = await getCategories()
  props.categories = cats
  return { props };
}