import Layout from './Layout';
import styled from 'styled-components'
import GlobalStyle from './GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import './css/reset.css'
import './css/style.css'

function App() {

  return (
    <BrowserRouter>
      <Layout />
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
