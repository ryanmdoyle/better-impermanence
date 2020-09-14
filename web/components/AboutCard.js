import React from 'react';
import Link from 'next/link';
import BlockContent from '@sanity/block-content-to-react';
import { useRouter } from 'next/router'
import { css } from '@emotion/core';

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
        <img src='/alissa.png'></img>
      </div>
      {!onAbout && (
        <>
          <h3>Hi, I'm Alissa</h3>
          <BlockContent blocks={author.miniBio} />
          <Link href='/about'>
            <a css={css`color: gray;align-self: flex-end; margin-right: 1rem;`}>Read more...</a>
          </Link>
        </>
      )}
    </div>
  );
};

export default AboutCard;