import React from 'react';
import App, { Container } from 'next/app';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import Head from 'next/head';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { I18nextProvider } from 'react-i18next';
import initialI18nInstance from '../i18n';
// import LanguageSwitch from "../components/LanguageSwitch";

let themeType = 'light';
if (typeof Storage !== 'undefined') {
  themeType = localStorage.getItem('muiTheme') || 'light';
}

class MyApp extends App {
  state = {
    theme: {
      palette: {
        type: themeType
      }
    }
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  toggleDarkTheme = () => {
    const { theme } = this.state;
    const newPaletteType = theme.palette.type === 'light' ? 'dark' : 'light';
    localStorage.setItem('muiTheme', theme.palette.type === 'light' ? 'dark' : 'light');
    this.setState({
      theme: {
        palette: {
          type: newPaletteType
        }
      }
    });
  }

  render() {
    const { theme } = this.state;
    const muiTheme = createMuiTheme(theme);

    const { Component, pageProps } = this.props; // eslint-disable-line
    const { i18n, initialI18nStore, initialLanguage } = pageProps || {};
    const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
    return (
      <Container>
        <Head>
          <title>My pagexxxx</title>
        </Head>
        <I18nextProvider
          i18n={i18n || initialI18nInstance}
          initialI18nStore={initialI18nStore}
          initialLanguage={initialLanguage}
        >
          <StylesProvider jss={jss}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <MuiThemeProvider theme={muiTheme}>
              <CssBaseline />
              <Component {...pageProps} onToggleDark={this.toggleDarkTheme} />
            </MuiThemeProvider>
          </StylesProvider>
        </I18nextProvider>
      </Container>
    );
  }
}


export default MyApp;
