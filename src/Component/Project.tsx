import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { movieInfo, snplab, wewigg } from "../Const/Images";
import { project } from "../Const/Text";
export default function Project(){
  return (
    <ProjectDiv> 
      <H3>Project</H3>
      <Content>
        <ProjectCard project="wewi.gg" person="개인" image={wewigg} Text={project.wewigg}/>
        <ProjectCard project="크라우드 워커 지원 페이지" person="5인" image={snplab} Text={project.snplab}/>
        <ProjectCard project="영화 정보 사이트" person="5인" image={movieInfo} Text={project.movieInfo}/>
      </Content>
    </ProjectDiv>
  )
}
const ProjectDiv = styled.div`
  height: 1000px;
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
  width: 100%;
  margin: 0 auto;
`;

