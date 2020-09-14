import React from 'react';
import Head from 'next/head'

import ContactForm from '../components/ContactForm';
import { getCategories, getPosts } from '../lib/queries';

const contact = () => {
  return (
    <div>
      <Head>
        <title>Better Impermanence - Contact</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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