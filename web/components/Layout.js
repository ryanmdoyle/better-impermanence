import React from 'react'
import { css } from '@emotion/core'

import SiteTitle from '../components/SiteTitle'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const background = css`
  width: 100vw;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.05);
`

const inner = css`
  max-width: 1200px;
  min-height: 100vh;
  margin: auto;
  box-shadow: 0 0px 10px rgba(0,0,0,0.25), 0 10px 5px rgba(0,0,0,0.5);
  background-color: white;
`
const main = css`
  width: 100%;
  padding: 0 2rem 2rem;
  display: flex;
  .content {
    width: 80%;
    padding-right: 2rem;
  }
  .sidebar {
    width: 20%;
    min-width: 300px;
  }
  .footer {
    display: none;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    .content {
      width: 100%;
      padding-right: 0;
    }
    .sidebar {
      display: none; 
    }
    .footer {
      display: block;
      width: 100%;
    }
  }

`


const Layout = ({ children, categories, author }) => {
  return (
    <div css={background}>
      <div css={inner}>
        <SiteTitle subtitle={null}>Better Impermanence</SiteTitle>
        <Nav></Nav>
        <main css={main}>
          <section className='content'>
            {children}
          </section>
          <section className='sidebar'>
            <Sidebar categories={categories} author={author} />
          </section>
          <section className='footer'>
            <Footer categories={categories} author={author} />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Layout;