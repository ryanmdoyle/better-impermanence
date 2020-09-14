import React from 'react';

import ContactForm from '../components/ContactForm';
import { getCategories, getPosts } from '../lib/queries';

const contact = () => {
  return (
    <div>
      <h2>Contact Me</h2>
      <ContactForm />
    </div>
  );
};

export default contact;

export async function getStaticProps() {
  const props = {}
  const cats = await getCategories()
  props.categories = cats
  return { props };
}