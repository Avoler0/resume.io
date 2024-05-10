import styled from 'styled-components'
import AboutMe from './Component/AboutMe';
import Career from './Component/Career';
import Profile from './Component/Profile';
import Project from './Component/Project';
import Skills from './Component/Skills';

export default function Layout() {
  return (
      <Container>
        {/* 프로필 */}
        <section className='top_info'>
          <div className='profile'>
            <ul className='site_list'>
              <li><a href='javascript:void(0);' className='github'>깃허브</a></li>
              <li><a href='javascript:void(0);' className='velog'>벨로그</a></li>
            </ul>
            <div className='profile_img'>
              <img src="https://user-images.githubusercontent.com/91608021/191460061-03d70fd9-aa6b-48f5-8b4c-14cf124540d2.jpg" />
            </div>
            <div className='info'>
              <dl className='block'>
                <dt>정윤서</dt>
                <dd>Front End 개발자</dd>
              </dl>
              <dl>
                <dt>Birth:</dt>
                <dd>1998-01-10</dd>
              </dl>
              <dl>
                <dt>Email:</dt>
                <dd>jys1391@gmail.com</dd>
              </dl>
              <dl>
                <dt>Phone:</dt>
                <dd>010-5897-8991</dd>
              </dl>
            </div>
          </div>
        </section>
        {/* 프로필 END */}
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