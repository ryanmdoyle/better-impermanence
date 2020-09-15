import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { css } from '@emotion/core';

import BlockContentSerialized from '../components/BlockContentSerialized';

const aboutSide = css`
  display: flex;
  flex-direction: column;
  .image-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
  }
  .image-container img {
    width: 200px;
    border-radius: 100%;
  }
`

const AboutCard = ({ author }) => {
  const { pathname } = useRouter();
  const onAbout = pathname === '/about'
  return (
    <div css={aboutSide}>
      <div className='image-container'>
        <img src='/alissa-beach.png'></img>
      </div>
      {!onAbout && (
        <>
          <BlockContentSerialized blocks={author.miniBio ? author.miniBio : ''} />
        </>
      )}
    </div>
  );
};

export default AboutCard;