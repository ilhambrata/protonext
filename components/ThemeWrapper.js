import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

function ThemeWrapper(props) {
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
  const { children } = props;
  const Wrap = (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
  return {
    Wrap,
    handleChangeMode
  };
}

ThemeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeWrapper;
