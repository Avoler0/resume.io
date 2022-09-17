import styled, { css } from "styled-components";
import { AnimatePresence, motion } from 'framer-motion'
import React from "react";
import { wrap } from "popmotion";
export default function Project(){

  return (
    <ProjectDiv> 
      <H3>Project</H3>
      <Content>
       
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

