import Layout from './Layout';
import styled from 'styled-components'
import GlobalStyle from './GlobalStyle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Layout />}/>
        <Route path='/:imageid' element={<Layout />}/>
      </Routes>
    </BrowserRouter>
  )
}

const Container = styled.div`
  width: 1200px;
  height: auto;
  margin: 0 auto;
  padding-bottom: 10rem;
  @media (max-width: 768px) {
    width: auto;
  }
`;

export default App
