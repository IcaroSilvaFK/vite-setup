import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';

import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { Router } from './routes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={Router} />
    </ThemeProvider>
  </StrictMode>,
);
