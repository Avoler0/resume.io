import styled from 'styled-components'
import AboutMe from './Component/AboutMe';
import Career from './Component/Career';
import Profile from './Component/Profile';
import Project from './Component/Project';
import Skills from './Component/Skills';

export default function Layout() {
  return (
      <Container>
        <Profile/>
        <AboutMe />
        <Skills />
        <Project />
        <Career />
      </Container>
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