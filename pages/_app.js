import React, { useEffect } from 'react';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { Container } from 'next/app';
import Head from 'next/head';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { appWithTranslation } from '../i18n';
import ThemeWrapper from '../components/ThemeWrapper';

function MyApp(props) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  });

  const { Component, pageProps } = props; // eslint-disable-line
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
  const { Wrap } = ThemeWrapper();
  return (
    <Container>
      <Head>
        <title>My pagexxxx</title>
      </Head>
      <StylesProvider jss={jss}>
        <Wrap>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </Wrap>
      </StylesProvider>
    </Container>
  );
}

export default appWithTranslation(MyApp);
