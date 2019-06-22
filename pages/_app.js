import React, { useEffect, useState } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { create } from 'jss';
import { I18nextProvider } from 'react-i18next';
import rtl from 'jss-rtl';
import { Container } from 'next/app';
import Head from 'next/head';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import initialI18nInstance from '../i18n';

function MyApp(props) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  });

  let themeType = 'light';
  if (typeof Storage !== 'undefined') {
    themeType = localStorage.getItem('muiTheme') || 'light';
  }
  // We keep the theme in app state
  const [theme, setTheme] = useState({
    palette: {
      type: themeType
    }
  });

  // we change the palette type of the theme in state
  const toggleDarkTheme = () => {
    const newPaletteType = theme.palette.type === 'light' ? 'dark' : 'light';
    localStorage.setItem('muiTheme', theme.palette.type === 'light' ? 'dark' : 'light');
    setTheme({
      palette: {
        type: newPaletteType
      }
    });
  };

  // we generate a MUI-theme from state's theme object
  const muiTheme = createMuiTheme(theme);

  const { Component, pageProps } = props; // eslint-disable-line
  const { i18n, initialI18nStore, initialLanguage } = pageProps || {};
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

  return (
    <Container>
      <Head>
        <title>My pagexxxx</title>
      </Head>
      <StylesProvider jss={jss}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <MuiThemeProvider theme={muiTheme}>
          <CssBaseline />
          <I18nextProvider
            i18n={i18n || initialI18nInstance}
            initialI18nStore={initialI18nStore}
            initialLanguage={initialLanguage}
          >
            <Component {...pageProps} onToggleDark={toggleDarkTheme} />
          </I18nextProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </Container>
  );
}

export default MyApp;
