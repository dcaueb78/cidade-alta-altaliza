import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';

import 'bootstrap/dist/css/bootstrap.min.css';

// Themes
import './styles/main.css';
import DarkTheme from './styles/themes/dark';

// Routes
import Routes from './routes';

// Providers
import AppProvider from './hooks';

const App: React.FC = () => (
  <Router>
    <ThemeProvider theme={DarkTheme}>
      <AppProvider>
        <Routes />
      </AppProvider>
      <GlobalStyles />

    </ThemeProvider>
  </Router>
);

export default App;
