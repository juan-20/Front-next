/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
 * {
    box-sizing: border-box;
    font-family: 'Comfortaa', cursive;
    >a{
    text-decoration:none; 
    color: #fff;
  }
  }

  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = db;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700" rel="stylesheet" />
        {/* metatg: */}

        <meta name="title" content="AluraQuiz" />
        <meta name="description" content="Site mal feito não terminado de um quizz" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quiz-star-wars-theta.vercel.app/" />
        <meta property="og:title" content="AluraQuiz" />
        <meta property="og:description" content="Site mal feito não terminado de um quizz" />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://quiz-star-wars-theta.vercel.app/" />
        <meta property="twitter:title" content="AluraQuiz" />
        <meta property="twitter:description" content="Site mal feito não terminado de um quizz" />
        <meta property="twitter:image" content="" />

      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
