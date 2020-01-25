import React from 'react'
import Head from 'next/head'
import Header from './header'
import dynamic from 'next/dynamic';

const Layout = props => (
  <>
    <Head>
      <title>Amusement Club Gacha</title>
    </Head>
    <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        color: #fff;
        background-color: #36393e;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          'Helvetica Neue', Arial, Noto Sans, sans-serif, 'Apple Color Emoji',
          'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
      }

      .container {
        max-width: 65rem;
        margin: 1.5rem auto;
        padding-left: 1rem;
        padding-right: 1rem;
      }

      .container .card {
        width: 100%;
        margin: 0;
        border-radius: 1rem;
        transition: .25s;
      }

      .container .card:hover {
        opacity: .25;
        cursor: pointer;
        transition: .25s;
      }

    `}</style>
    <Header />
    <main>
      <div className="container">{props.children}</div>
    </main>
  </>
)

export default Layout
