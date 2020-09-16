import React from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router'
import { css } from '@emotion/core'

import BlockContentSerialized from '../components/BlockContentSerialized';
import { getAuthors, getCategories, getAuthorBio } from '../lib/queries';

const photo = css`

    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
   img {
    width: 200px;
    border-radius: 100%;
  }
`;

const about = ({ author, authorBio, categories }) => {
  const { pathname } = useRouter();
  const onAbout = pathname === '/about'
  return (
    <div>
      <Head>
        <title>Better Impermanence - About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h2>About Me</h2>
      <div css={photo}>
        <img src='/alissa-beach.png'></img>
      </div>
      <BlockContentSerialized blocks={authorBio.bio} />
    </div>
  );
};

export default about;

export async function getStaticProps() {
  const authors = await getAuthors();
  const authorBio = await getAuthorBio();
  const categories = await getCategories()
  return {
    props: {
      author: authors[0],
      categories: categories,
      authorBio: authorBio[0],
    }
  }
}