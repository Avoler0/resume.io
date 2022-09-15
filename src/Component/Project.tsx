import styled from "styled-components";
import images from "../images/project"

export default function Project(){
  const wewigg = "src/images/project/wewi.gg"
  function ImageRender (name:any) {
    return (
      <ImageDiv>
        <img src={`${name.project}/${name.image}.png`} />
      </ImageDiv>
    )
  }
  return (
    <ProjectDiv>
      <H3>Project</H3>
      <Content>
        <ProjectCard>
          <ImageRender project={wewigg} image="summonerPage"/>
          <InfoDiv>
            wewi.gg
          </InfoDiv>
        </ProjectCard>
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
const ProjectCard = styled.div`
  display: flex;
  margin: 2rem 1rem;
  padding: 1rem;
  border: 2px solid #CCCCCC;
  border-radius: 1.2rem;
`;
const ImageDiv = styled.div`
  position: relative;
  width: 40%;
  flex-grow: 0;
  border: 1px solid black;
  padding: 1rem;
  img{
    width: 100%;
  }
`;
const InfoDiv = styled.div`
  flex-grow: 1;
  padding: 0 1.5rem;
  font-size: 1.2rem;
`;