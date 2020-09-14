import React from 'react';
import Link from 'next/link';
import { css } from '@emotion/core'

const nav = css`
  height: 60px;
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`

const list = css`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
  li {
    font-size: 1.25rem;
    height: 100%;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      display: block;
    }
  }
`

const Nav = () => {
  return (
    <nav css={nav}>
      <ul css={list}>
        <li>
          <Link href='/'>
            <a css={css`color: var(--black);text-decoration: none;`}>Blog</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a css={css`color: var(--black);text-decoration: none;`}>About Me</a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a css={css`color: var(--black);text-decoration: none;`}>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;