import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { movieInfo, snplab, wewigg ,tripbtoz} from "../Const/Images";
import { project } from "../Const/Text";
import { H3 } from "./CommonStyle";

export default function Project(){
  return (
    <div> 
      <H3>Project</H3>
      <Content>
        <ProjectCard project="wewi.gg" person="개인" image={wewigg} Text={project.wewigg}/>
        {/* <ProjectCard project="크라우드 워커 지원 페이지" person="5인" image={snplab} Text={project.snplab}/> */}
        {/* <ProjectCard project="영화 정보 사이트" person="5인" image={movieInfo} Text={project.movieInfo}/> */}
        <ProjectCard project="호텔 예약 사이트" person="5인" image={tripbtoz} Text={project.tripbtoz}/>
      </Content>
    </div>
  )
}

const Content = styled.div`
  width: 100%;
  margin: 0 auto;
`;

