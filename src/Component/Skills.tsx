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


export default function Skills(){
  return (
    <SkillsDiv>
      <H3>Skills</H3>
      <Content>
        <Skill>
          <h4>Front-End</h4>
          <SkillWrap>
            <BorderDiv small >
              <HtmlIco width="68" height="90%"/>
            </BorderDiv>
            <BorderDiv small >
              <CssIco width="68" height="90%"/>
            </BorderDiv>
            <BorderDiv small>
              <JsIco width="68" height="90%" />
            </BorderDiv>
          </SkillWrap>
          <SkillWrap>
            <BorderDiv small >
              <TypeIco width="68" height="90%"/>
            </BorderDiv>
            <BorderDiv small >
              <StyleIco width="68" height="90%"/>
            </BorderDiv>
            <BorderDiv small style={{visibility :"hidden"}} />
          </SkillWrap>
          <SkillWrap>
            <BorderDiv>
              <ReactIco width="68" height="90%" />
              <div style={{color:"#61dafb"}}>React</div>  
            </BorderDiv>
          </SkillWrap>
          <SkillWrap>
            <BorderDiv>
              <ReduxIco width="68" height="90%" />
              <div style={{color:"#764ABC"}}>Redux</div>  
            </BorderDiv>

          </SkillWrap>


        </Skill>
        <Skill>
          <h4>Tools</h4>
            <BorderDiv>
              <NotionIco width="68" height="90%" />
              <div>Notion</div>  
            </BorderDiv>
            <BorderDiv>
              <GitIco width="68" height="90%" fill="#F05032" />
              <div style={{color:"#F05032"}}>Git</div>  
            </BorderDiv>
        </Skill>
      </Content>

    </SkillsDiv>
  )
}
const SkillsDiv = styled.div`

`;
const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  display:flex;
  justify-content: space-between;
`;
const H3 = styled.h3`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  color: gray;
  padding-bottom: 1.5rem;
  border-bottom: dashed 2px #CCCCCC;
`;
const SkillWrap = styled.article`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;
const BorderDiv = styled.div<{small?:boolean}>`
  display: ${props => props.small ? "inline-block" : "flex"};
  width: ${props => props.small ? "9rem" : "100%"};
  flex-basis: fill;
  height: 6rem;
  margin-bottom: 0.3rem;
  text-align: center;
  align-items: center;
  border: 2px solid #CCCCCC;
  border-radius: 15px;
  :hover{
    transform: scale(1.1);
    transition: all ease-out 0.2s;
  }
  :second-child{
    
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
    ::before{
      display: inline-block;
      content: "";
      height: 100%;
      vertical-align: middle;
    }
  }
`;

const Skill = styled.div`
  width: 40%;
  padding: 1rem;
  border: 2px solid #CCCCCC;
  border-radius: 15px;
  h4{
    text-align: center;
  }
`;
