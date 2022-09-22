import styled from "styled-components"
import { H3 } from "./CommonStyle";

export default function AboutMe(){
  return (
    <div>
      <H3>About Me</H3>
      <Content>
        <ImageDiv>
          <Image src="https://user-images.githubusercontent.com/91608021/191460061-03d70fd9-aa6b-48f5-8b4c-14cf124540d2.jpg" />
        </ImageDiv>
        <Info>
          <Text>
            <p>웹 프론트엔드 개발을 독학으로 입문하였으며</p>
            <p>꾸준한 Git Commit으로 매일 발전해 나아가는 개발자<span><strong style={{color:"blue"}}> 정윤서</strong>입니다.</span></p>
            <p>개발자로서 중요한 마인드는 Resourceful하게</p>
            <p>주도적으로 개발을 진행할 수 있는 개발자라고 생각합니다.</p>
          </Text>
        </Info>
      </Content>
    </div>
  )
}


const Content = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 2rem;
  display: flex;
  @media (max-width: 768px) {
    text-align: center;
    display: block;
    margin: 0;
  }
  span{
    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const ImageDiv = styled.div`
  text-align: center;
`;
const Image = styled.img`
  width: 300px;
  border-radius: 300px;
  margin-right: 4rem;
  @media (max-width: 768px) {
    width: 300px;
    margin: 0;
    border-radius: 300px;
  }
`;
const Info = styled.div`
  p{
    margin: 1rem;
    font-size: 1.3rem;
    font-weight: bold;
    @media (max-width: 768px) {
      margin: 0;
      font-size: 0.9rem;
    }
  }
`;
const Text = styled.div`
  ::before{
    display: inline-block;
    content: "";
    height: 100%;
    vertical-align: middle;
  }
`;