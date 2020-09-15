import React from 'react';
import Head from 'next/head'

import BlockContentSerialized from '../components/BlockContentSerialized';
import { getAuthors, getCategories } from '../lib/queries';

const about = ({ author, categories }) => {
  return (
    <div>
      <Head>
        <title>Better Impermanence - About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h2>About Me</h2>
      <BlockContentSerialized blocks={author.bio} />
    </div>
  );
};

export default about;

export async function getStaticProps() {
  const authors = await getAuthors();
  const categories = await getCategories()
  return {
    props: {
      author: authors[0],
      categories: categories,
      author: authors[0],
    }
  }
}