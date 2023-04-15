import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
        <title>Quickly create issues for anything</title>
        <meta
          name="description"
          content=" Tired of spending hours creating issues on GitHub? Let our
          state-of-the-art application do the heavy lifting for you. With its
          advanced AI capabilities, you'll be able to submit bug reports and
          feature requests in a snap!"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
