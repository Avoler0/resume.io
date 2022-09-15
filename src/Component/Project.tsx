import styled from "styled-components";


export default function Project(){
  return (
    <ProjectDiv>
      <H3>Project</H3>
      <Content>
        콘텐츠
      </Content>
    </ProjectDiv>
  )
}

const ProjectDiv = styled.div`

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
  width: 90%;
  margin: 0 auto;
`;