import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "popmotion";
import React from "react";
import styled from "styled-components";

interface props {
  project:string,
  person:string
}

export default function ProjectCard({project,person}:props){
  const wewigg = "src/images/project/wewi.gg"
  const wewiggImg = [`${wewigg}/image0.png`,`${wewigg}/image1.png`,`${wewigg}/image2.png`,`${wewigg}/image3.png`,`${wewigg}/image4.png`]
  const paginate = (newDirection: number) => {
    setSlide([slide + newDirection, newDirection]);
  };
  const [[slide, direction], setSlide] = React.useState([0, 0]);
  const boxVariants = {
    enter: () => {
      return {
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: () => {
      return {
        zIndex: 0,
        opacity: 0
      };
    }
  };
  const imageIndex = wrap(0,wewiggImg.length,slide)
  return (
     <CardDiv>
          <Name>wewi.gg</Name>
          <Person>개인 프로젝트</Person>
          <ProjectContent>
            <AnimatePresence initial={false} custom={false} >
              <ImageDiv>
                <motion.img 
                  key={slide}
                  src={wewiggImg[imageIndex]}
                  variants={boxVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                  }}
                  />
                  <SlideButton prev onClick={() => paginate(-1)}>{"‣"}</SlideButton>
                  <SlideButton next onClick={() => paginate(1)}>{"‣"}</SlideButton>
              </ImageDiv>
            </AnimatePresence>
            <Description>
              <p>wewi.gg는 <strong>League of Legend 게임의 전적을 조회하고 , 같이 게임을 할 사람을 구하는 서비스</strong>입니다.</p>
              <p>Riot Games에서 제공하는 API를 이용하여 만든 전적검색 & 듀오구인 사이트</p>
              <p>Redux를 이용하여 로그인 전역상태 관리</p>
              <p>REstful API</p>
            </Description>
          </ProjectContent>
        </CardDiv>
    )
}

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1rem;
  border: 2px solid #CCCCCC;
  border-radius: 1.2rem;
`;
const Name = styled.span`
  font-size: 2.4rem;
  font-weight: 800;
  box-sizing: fit;
`;
const Person = styled.span`
  font-size: 1rem;
  color: #6c757d;
`;
const ProjectContent = styled.div`
  width: 100%;
  height: 100%;
  margin: 3rem 0;
  display: flex;
  justify-content: space-between;
  
`;

const ImageDiv = styled.div`
  position: relative;
  flex-grow: 0;
  width: 50%;
  height: 20rem;
  text-align: center;
  border: 1px solid #CCCCCC;
  border-radius: 1rem;
  margin-right: 3rem;
  img{
    position: absolute; top:0; left: 0;
    object-fit: contain;
    width: 100%;
    height: 100%;
    :after{display:inline-block; height:100%; content:""; vertical-align:middle;}
  }
`;
const SlideButton = styled.button<{prev?:boolean,next?:boolean}>`
  top: calc(50% - 20px);
  position: absolute;
  background: white;
  border-radius: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2rem;
  z-index: 2;
  ${(props) => props.prev &&
   css`
    transform: scale(-1);
    left: 1rem;
    border-radius: 30px;
   `
  }
    ${(props) => props.next &&
   css`
    right: 1rem;
    border-radius: 30px;
   `
  }
`;
const Description = styled.div`
  flex-grow: 2;
  flex-wrap: wrap;
  width: 50%;
  font-size: 1.05rem;
  font-weight: normal;
  p{
    margin: 0;
    line-height: 1.5rem;
  }
  strong{
    font-size: 1rem;
    font-weight: 600;
  }
`;