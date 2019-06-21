import React, { useEffect, useState } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { Container } from 'next/app';
import Head from 'next/head';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { appWithTranslation } from '../i18n';
// import { Wraper } from '../components/ThemeWrapper';

function MyApp(props) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  });

  // We keep the theme in app state
  const [theme, setTheme] = useState({
    palette: {
      type: 'light'
    }
  });

  // we change the palette type of the theme in state
  const toggleDarkTheme = () => {
    const newPaletteType = theme.palette.type === 'light' ? 'dark' : 'light';
    setTheme({
      palette: {
        type: newPaletteType
      }
    });
  };

  // we generate a MUI-theme from state's theme object
  const muiTheme = createMuiTheme(theme);

  const { Component, pageProps } = props; // eslint-disable-line
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
          <Component {...pageProps} onToggleDark={toggleDarkTheme} />
        </MuiThemeProvider>
      </StylesProvider>
    </Container>
  );
}

export default appWithTranslation(MyApp);
