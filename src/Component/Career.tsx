import styled from "styled-components";
import { H3 } from "./CommonStyle";

export default function Career(){
  return (
    <div>
      <H3>Career</H3>
      <Content>
        <Name>
          <h4>세종컴퓨터학원</h4>
          <div>C/C++ 프로그래밍 과정</div>
          <div style={{color:"#cccccc"}}>2021.06 - 2022.02</div>
        </Name>
        <Description>
          <ul>
            <h4>Visual C++ Window 프로그래밍 과정 수료</h4>
            <li>Programming의 기본 문법, Algorithm의 개념과 Visual C++ Window 프로그래밍 과정 수료</li>
            <li>Windows Program 기초, GDI, Collection Class, 분할 Window, API, Bitmap Graphics</li>
            <li>Multi Thread, Database</li>
            <li>소켓 프로그래밍을 활용한 채팅 프로그램,  Network 테트리스</li>
          </ul>
          <ul>
            <h4>JAVA 프로그래밍 과정 수료</h4>
            <li>Java의 전반적인 Programming 문법을 익혔습니다.</li>
          </ul>
        </Description>
      </Content>
            <Content>
        <Name>
          <h4>원티드 프리온보딩</h4>
          <div>프론트엔드 프리온보딩 코스 과정</div>
          <div style={{color:"#cccccc"}}>2022.07 - 2022.08</div>
        </Name>
        <Description>
          <ul>
            <li>5인의 팀으로 활동하면서 동료들과 코드 리뷰를 수행하며 협업 역량을 키웠습니다.</li>
            <li>팀원 중 팀장으로서 리더십으로  팀원들과의 소통 및 의견 조율, 프로젝트 진행 상황 등 일정 관리를 진행하고 팀원들을 이끌었습니다.</li>
            <li>5개의 프로젝트를 진행하며 기존에 학습한 이론 및 기술을 바탕으로 기업에서 제공하는 실전 과제를 통해서 다양한 사례의 프로젝트를 경험하며, 실전과 같이 프로젝트를 진행했습니다.</li>
          </ul>
        </Description>
      </Content>
    </div>
  )
}

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  border-bottom: 1px solid #cccccc;
  @media (max-width: 768px) {
    display: block;
  }
`;
const Name = styled.div`
    @media (max-width: 768px) {
      text-align: center;
      margin-bottom: 1.5rem;
    }
  h4{
    font-size: 2rem;
    margin: 0;
  }
  div{
    text-align: right;
    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;
const Description = styled.div`
  width: 60%;
  @media (max-width: 768px) {
    width: 100%;
  }
  ul{
    margin: 0;
    margin-bottom: 2rem;
    @media (max-width: 768px) {
      padding: 0;
    }
  }
  h4{
    margin: 0.5rem 0;
  }
  li{
    list-style: circle;
    margin-left: 1.5rem;
  }
`;