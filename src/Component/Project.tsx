import styled from "styled-components";


export default function Project(){
  return (
    <ProjectDiv>
      <H3>Project</H3>
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