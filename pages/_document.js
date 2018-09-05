import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600,700,900" rel="stylesheet" />

          <title>Amusement Club</title>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Amusement Club is a global Discord bot for collecting amazing cards from your favourite show or game! Gift a fun game to your Discord community!" />
          <meta property="og:title" content="Amusement Club: Discord gacha" />
          <meta property="og:type" content="discord bot" />
          <meta property="og:url" content="https://amusementclub.xyz" />
          <meta property="og:image" content="https://amusementclub.nyc3.digitaloceanspaces.com/web/amusement-logo-small.png" />
          <meta property="og:description" content="Global gacha game for Discord with thousands of cute and fancy cards made by the bot's community." />

          <link rel="shortcut icon" href="/_next/static/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/_next/static/favicon.ico" type="image/x-icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
