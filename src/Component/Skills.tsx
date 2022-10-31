import styled from "styled-components"

import { ReactComponent as HtmlIco } from "../images/icons/html5.svg"
import { ReactComponent as CssIco } from "../images/icons/css.svg"
import { ReactComponent as JsIco } from "../images/icons/javascript.svg"
import { ReactComponent as NotionIco } from "../images/icons/notion.svg"
import { ReactComponent as ReactIco } from "../images/icons/react.svg"
import { ReactComponent as TypeIco } from "../images/icons/typescript.svg"
import { ReactComponent as StyleIco } from "../images/icons/styled-components.svg"
import { ReactComponent as ReduxIco } from "../images/icons/redux.svg"
import { ReactComponent as GitIco } from "../images/icons/git.svg"
import { ReactComponent as NextJsIco } from "../images/icons/nextjs.svg"
import { H3 } from "./CommonStyle";

export default function Skills(){
  const size = {
    width:"68",
    height:"90%",
    nextjs:{
      height:"99%"
    }
  }
  return (
    <div>
      <H3>Skills</H3>
      <Content>
        <Skill>
          <h4>Front-End</h4>
          <SkillWrap>
            <BorderDiv small >
              <HtmlIco {...size} />
            </BorderDiv>
            <BorderDiv small >
              <CssIco {...size}/>
            </BorderDiv>
            <BorderDiv small>
              <JsIco {...size} />
            </BorderDiv>
          </SkillWrap>
          <SkillWrap>
            <BorderDiv small >
              <TypeIco {...size}/>
            </BorderDiv>
            <BorderDiv small >
              <StyleIco {...size} />
            </BorderDiv>
            <BorderDiv small style={{visibility :"hidden"}} />
          </SkillWrap>
          <SkillWrap>
            <BorderDiv>
              <ReactIco {...size} />
              <div style={{color:"#61dafb"}}>React</div>  
            </BorderDiv>
          </SkillWrap>
          <SkillWrap>
            <BorderDiv>
              <ReduxIco {...size} />
              <div style={{color:"#764ABC"}}>Redux</div>  
            </BorderDiv>
          </SkillWrap>
          <SkillWrap>
            <BorderDiv style={{textAlign:"center"}}>
              <NextJsIco {...size.nextjs} style={{margin:"0 auto"}}/>
              {/* <div style={{color:"#000000"}}>Next.js</div>   */}
            </BorderDiv>
          </SkillWrap>
        </Skill>

      </Content>
    </div>
  )
}

const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  display:flex;
  justify-content: space-around;
  @media (max-width: 768px) {
    display: block;
  }
`;

const SkillWrap = styled.article`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;

`;
const BorderDiv = styled.div<{small?:boolean}>`
  display: ${props => props.small ? "inline-block" : "flex"};
  transition: all ease-out 0.2s;
  width: ${props => props.small ? "9rem" : "100%"};
  height: 6rem;
  margin-bottom: 0.3rem;
  text-align: center;
  align-items: center;
  border: 2px solid #CCCCCC;
  border-radius: 15px;
  cursor: pointer;
  :hover{
    transform: scale(${props => props.small ? "1.08" : "1.05"});
  }
  svg{
    flex-grow: 0;
    margin-top: 0.3rem;
    align-items: center;
    margin-left: ${props => props.small ? "0" : "1.2rem"};;
  }
  div{
    flex-grow: 1;
    align-items: center;
    font-size: 3rem;
    font-weight: 700;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const Skill = styled.div`
  width: 45%;
  padding: 2rem;
  border: 2px solid #CCCCCC;
  border-radius: 15px;
  font-size: 2rem;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    width: 100%;
  }
  h4{
    color: #87CEEB;
    
    text-align: left;
    margin: 2.5rem auto;
    margin-top: 0;
    border-bottom: 1px solid #a09d9d;

  }
`;
