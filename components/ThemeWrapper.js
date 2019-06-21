import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

export default function ThemeWrapper() {
  const [theme, setTheme] = useState(
    createMuiTheme({
      palette: {
        type: 'dark'
      }
    })
  );
  const handleChangeMode = mode => {
    console.log(theme);
    setTheme(
      createMuiTheme({
        palette: {
          type: mode
        }
      })
    );
  };
  return {
    theme,
    handleChangeMode
  };
}

export function Wraper(props) {
  const { children } = props;
  const [mode, setMode] = useState('dark');
  const [theme, setTheme] = useState(
    createMuiTheme({
      palette: {
        type: 'light'
      }
    })
  );
  const handleChangeMode = modeParam => {
    setTheme(
      createMuiTheme({
        palette: {
          type: modeParam
        }
      })
    );
  };
  const handleSwitchMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
    handleChangeMode(mode);
  };
  return (
    <div>
      <button type="button" onClick={() => handleSwitchMode()}>
        Switch mode
      </button>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </div>
  );
}

Wraper.propTypes = {
  children: PropTypes.node.isRequired,
};
