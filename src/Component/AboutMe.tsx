import styled from "styled-components"
import JungYunSeo from "../images/jungyunseo.jpg"
export default function AboutMe(){
  return (
    <AboutDiv>
      <H3>About Me</H3>
      <Content>
        <Image src={JungYunSeo} />
        <Info>
          <Text>
            {/* <p>안녕하세요. 프론트엔드 개발자 정윤서입니다.</p>
            <p>프론트엔드의 지식에 대한 열망이 아주 강합니다.</p>
            <p>배우는 것을 좋아하며 배운 지식을 나누거나 곱씹어 재정리하는것을 좋아합니다.</p>
            <p>꾸준함을 중점으로 포기하지 않으며 목표에 대해 전진합니다.</p> */}
          </Text>
        </Info>
      </Content>
    </AboutDiv>
  )
}

const AboutDiv = styled.div`

`;
const H3 = styled.h3`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  color: gray;
  padding-bottom: 1.5rem;
  border-bottom: dashed 2px #CCCCCC;
`;
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
`;
const Text = styled.div`
  ::before{
    display: inline-block;
    content: "";
    height: 100%;
    vertical-align: middle;
  }
`;