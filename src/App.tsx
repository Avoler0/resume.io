import Layout from './Layout';
import styled from 'styled-components'
import GlobalStyle from './GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import './css/reset.css'
import './css/style.css'
import './css/config.css'
import React from 'react';

function App() {

  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App
