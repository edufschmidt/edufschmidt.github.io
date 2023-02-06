import { ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import "./assets/fonts/index.css";
import Layout from './components/Layout';
import './index.css';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const theme = {
  colors: {
    primary: 'hotpink'
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
