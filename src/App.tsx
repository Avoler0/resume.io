import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components'
import AboutMe from './Component/AboutMe';
import Career from './Component/Career';
import Profile from './Component/Profile';
import Project from './Component/Project';
import Skills from './Component/Skills';
import GlobalStyle from './GlobalStyle';
function App() {

  return (
    <>
      <GlobalStyle />
      <Container className="App">
        <Profile/>
        <AboutMe />
        <Skills />
        <Project />
        <Career />
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 1200px;
  height: auto;
  margin: 0 auto;
`;

export default App
