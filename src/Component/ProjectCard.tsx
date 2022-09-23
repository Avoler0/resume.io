import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "popmotion";
import React, { useRef } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as GithubIco } from "../images/icons/github.svg"

interface props {
  project:string,
  person:string,
  image:string[],
  Text:Function,
  git:string
}

export default function ProjectCard({project,person,image,Text,git}:props){
  const [[slide, direction], setSlide] = React.useState([0, 0]);
  const [scrollY, setScrollY] = React.useState(0);
  const imageIndex = wrap(0,image.length,slide)
  const [imageClick,setImageClick] = React.useState<string | null>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  function clickImage(props:any){
    setScrollY(window.pageYOffset)
    setTimeout(()=>{
      imageRef.current?.scrollIntoView();
    },100)
    document.body.style.cssText  = `overflow: hidden`;
    setImageClick(props)
  }
  function clickModal(){
     window.scrollTo(scrollY,scrollY)
    setImageClick(null)
    document.body.style.cssText  = `overflow: auto`;
  }
  const paginate = (newDirection: number) => {
    setSlide([slide + newDirection, newDirection]);
  };
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
  return (
     <CardDiv>
      <Name>{project}</Name>
      <Person>{person} 프로젝트</Person>
      <ProjectContent>
        <AnimatePresence initial={false} custom={false} >
          <ImageDiv big={imageClick}>
            <motion.img
              onClick={()=>clickImage(project+slide)}
              layoutId={project+slide}
              key={slide}
              src={image[imageIndex]}
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
        <Description big={imageClick}>
          <Text />
          <LinkDiv>
            <GitSvg>
              <GithubIco />
            </GitSvg>
            <URL>
              <a href={git}>{git}</a>
            </URL>
          </LinkDiv>
        </Description>
      </ProjectContent>
      {imageClick && 
        <BigImage ref={imageRef} id="bigImage">
          <Overlay onClick={clickModal}/>
            <ClickImage
            onClick={()=>{setImageClick(null)}}
            layoutId={project+slide}
            key={slide}
            src={image[imageIndex]}
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
        </BigImage>
      }
    </CardDiv>
    )
}
const BigImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  justify-content: center;
  text-align: center;
  align-items: center;
  top: 0;
  left: 0;
  background-color: white;
  border-radius: 1.2rem;
  z-index: 10;
  @media (max-width: 768px) {
    transform: rotate(-90deg);
    transform-origin: top left;
    top: 100%;
    left: 0;
    right: 0;
    width: 100vh;
    height: 100vw;
    /* top: 100%;
    left: 0;
    width: 100vh;
    height: 100vw; */
  }
`;
const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
`;
const ClickImage = styled(motion.img)`
  margin: auto auto;
  object-fit: contain;
  width: 80%;
  height: 90%;

`;
const CardDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1rem;
  border: 2px solid #CCCCCC;
  border-radius: 1.2rem;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    position: static;
  }
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
  margin: 3rem 0;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: block;
  }
`;

const ImageDiv = styled.div<{big:any}>`
  visibility: ${props => props.big ? "hidden" : "visible"};
  position: relative;
  flex-grow: 0;
  width: 50%;
  height: 25rem;
  text-align: center;
  border: 1px solid #CCCCCC;
  border-radius: 1rem;
  margin-right: 3rem;
  @media (max-width: 768px) {
    width: 100%;
    height: 15rem;
  }
  img{
    position: absolute; top:0; left: 0;
    object-fit: contain;
    width: 100%;
    height: 100%;
    :after{display:inline-block; height:100%; content:""; vertical-align:middle;}
  }
  button{
    display: ${props => props.big ? "none" : "block"};
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
const Description = styled.div<{big:any}>`
  visibility: ${props => props.big ? "hidden" : "visible"};
  position: relative;
  flex-grow: 2;
  flex-wrap: wrap;
  width: 50%;
  font-size: 1.05rem;
  font-weight: normal;
  padding-bottom: 5rem;
  @media (max-width: 768px) {
    width: 100%;
  }
  p{
    line-height: 1.5rem;
  }
  strong{
    font-size: 1rem;
    font-weight: 600;
  }
`;
const LinkDiv = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  bottom: 0;
  border: 1px solid #cccccc;
  border-radius: 1rem;
  font-size: 1rem;
  text-decoration: underline;
  div{
    display: inline-block;
  }

`;
const GitSvg = styled.div`
  padding: 1rem;
  border-right: 1px solid #cccccc;
  svg{
    width: 2rem;
  }

`;
const URL = styled.div`
  margin: 0 auto;
`;