import { useState } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';

const useTheme = () => {
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
};

export default useTheme;
