import styled from 'styled-components'
import AboutMe from './Component/AboutMe';
import Career from './Component/Career';
import Project from './Component/Project';
import Skills from './Component/Skills';
import React from 'react';

export default function Layout() {
  return (
      <div className='container resume'>
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
        {/* 자기소개 */}
        <section className='about_me'>
          <h2>About Me ?</h2>
          <div className='desc'>
            <dl>
              <dt>꾸준히 노력하는 사람</dt>
              <dd>
                <b>무엇이든 꾸준하게 인내하고 노력하는 사람</b>입니다. <br />
                느려도 천천히 막히더라도 좌절하지 않는 것이 저의 인생에서 가져가고 싶은 버릇입니다. <br /><br />

                현재 꾸준히 진행 중인 프로젝트에 참여하여, 문제 해결에 대한 열정과 꾸준한 노력을 쏟고 있습니다.<br />
                프로젝트 진행 과정에서 발생하는 어려움에도 불구하고 끈기있게 해결책을 모색하고, 함께 팀원들과 협력하여 성과를 이끌어내고 있습니다.<br />
                이러한 경험을 통해 저의 꾸준함과 인내심이 어떻게 결과로 이어지는지를 몸소 느꼈으며, 이는 제가 가진 가치 중 하나로 꼽힙니다.
              </dd>
            </dl>
            <dl>
              <dt>
                개발자라는 직업을 선택하게 된 이유
              </dt>
              <dd>
                프론트엔드 개발자로의 직업 선택은 저의 창의성과 사용자 경험에 대한 관심에서 비롯됩니다.<br />
                사용자가 직접 상호 작용하는 웹 및 애플리케이션 인터페이스를 개발함으로써,<br />
                제가 만든 제품이 사람들의 삶에 어떤 영향을 미치는지를 직접 경험하고 싶었습니다.<br />
                또한, 프론트엔드 개발은 디자인과 기술의 융합으로 새로운 아이디어를 구현하고,<br />
                사용자들에게 보다 효과적으로 전달할 수 있는 창구를 제공한다는 점에서 매력을 느꼈습니다.<br />
                이를 통해 제가 개발한 제품이 사용자들에게 긍정적인 경험을 제공하고, 그들의 삶을 더욱 편리하게 만들 수 있다는 것이 저의 큰 동기 중 하나입니다.
              </dd>
            </dl>
            <dl>
              <dt>어떤 개발자가 되고 싶은가요?</dt>
              <dd>
                <b>끊임없이 성장할 수 있는 개발자</b>가 되고 싶습니다.<br />
                프론트엔드는 다른 개발직군에 비해 빠르게 기술이 변화합니다.<br />
                새로운 기술을 빠르게 받아드리고 습득할 수 있는 <b>Resourceful</b> 하고 주도적인 개발을 진행하는 개발자가 되고 싶습니다.
              </dd>
            </dl>
          </div>
        </section>
        {/* 자기소개 END */}
        <Skills />
        <Project />
        <Career />
      </div>
  )
}

