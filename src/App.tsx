import React from 'react';
import './App.css';
import { Navbar } from './main/Navbar';
import { Footer } from './main/Footer';
import { HomePage } from './main/HomePage';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import { blue, red } from '@material-ui/core/colors';

const App: React.FC = () => {
  const theme = createMuiTheme({
    palette: {
      primary: blue,
      secondary: red
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <HomePage />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
