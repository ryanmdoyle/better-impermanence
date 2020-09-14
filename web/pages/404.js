import React from 'react';
import Head from 'next/head'

import { getCategories, getAuthors, author } from '../lib/queries';

const fourofour = (props) => {
  return (
    <div>
      <Head>
        <title>Better Impermanence - 404</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p>Oopps.....something went wrong.</p>
    </div>
  );
};

export default fourofour;

export async function getStaticProps() {
  const props = {}
  const authors = await getAuthors();
  const cats = await getCategories()
  props.categories = cats
  props.author = authors[0]
  return { props };
}