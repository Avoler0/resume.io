import styled from "styled-components"
import JungYunSeo from "../images/jungyunseo.jpg"
import { H3 } from "./CommonStyle";

export default function AboutMe(){
  return (
    <div>
      <H3>About Me</H3>
      <Content>
        <Image src={JungYunSeo} />
        <Info>
          <Text>
            <p><strong>안녕하세요, 저는 정윤서입니다.</strong></p>
            <p>새로운 지식을 터득하는 것을 좋아합니다.</p>
            <p>개발자는 바뀌는 트렌드를 읽고 곧 바로 터득하는 것이 힘이라고 생각합니다. </p>
          </Text>
        </Info>
      </Content>
    </div>
  )
}


const Content = styled.div`
  margin-left: 2rem;
  display: flex;
`;
const Image = styled.img`
  width: 300px;
  border-radius: 300px;
  margin-right: 4rem;
`;
const Info = styled.div`
  p{
    font-size: 1.2rem;
    font-weight: 500;
  }
  strong{
    font-size: 1.5rem;
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