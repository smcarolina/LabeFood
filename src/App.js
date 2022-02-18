import React from 'react';
import { ThemeProvider} from "@material-ui/styles";
import { Router } from './routes/Router';
import theme from './constants/theme'


export default function App() {
  return (

    <ThemeProvider theme={theme}>
      
      <Router/>
    </ThemeProvider>
    
  );
}

