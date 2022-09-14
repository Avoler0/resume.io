import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components'
import AboutMe from './Component/AboutMe';
import Profile from './Component/Profile';
import Skills from './Component/Skills';
import GlobalStyle from './GlobalStyle';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/'>
          <Container className="App">
            <Profile/>
            <AboutMe />
            <Skills />
          </Container>
        </Route>
      </Routes>
    </>
  )
}

const Container = styled.div`
  width: 1200px;
  height: auto;
  margin: 0 auto;
`;

export default App
