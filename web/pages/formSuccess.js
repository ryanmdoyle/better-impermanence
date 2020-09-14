import React from 'react';
import Head from 'next/head'

import { getCategories, getPosts } from '../lib/queries';

const formSuccess = () => {
  return (
    <div>
      <Head>
        <title>Better Impermanence - Success!</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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