import React from 'react'
import Head from 'next/head'
import Header from './header'
import dynamic from 'next/dynamic';

const Layout = props => (
  <>
    <Head>
      <title>Amusement Club Gacha</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
      <meta name="description" content="Amusement Club is a global Discord bot for collecting amazing cards from your favourite show or game! Gift a fun game to your Discord community!" />
      <meta property="og:title" content="Amusement Club: Discord gacha" />
      <meta property="og:type" content="discord bot" />
      <meta property="og:url" content="https://amusementclub.xyz" />
      <meta property="og:image" content="https://amusementclub.nyc3.digitaloceanspaces.com/web/amusement-logo-small.png" />
      <meta property="og:description" content="Global gacha game for Discord with thousands of cute and fancy cards made by the bot's community." />

      <link rel="shortcut icon" href="/_next/static/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/_next/static/favicon.ico" type="image/x-icon" />
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

      pre code {
        background-color: rgba(20,20,20,0.3);
        border-radius: 3px;
        display: block;
        padding: 20px;
      }

      code {
        display: inline;
        font-family: Consolas, Menlo, Courier, monospace;
        padding: 0.2em 0.4em;
        margin: 0;
        font-size: 85%;
        border-radius: 3px;
        background-color: rgba(20,20,20,0.3);
      }

    `}</style>
    <Header />
    <main>
      <div className="container">{props.children}</div>
    </main>
  </>
)

export default Layout
