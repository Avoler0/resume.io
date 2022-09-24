import styled from "styled-components"
import { ReactComponent as GithubIco } from "../images/icons/github.svg"
import { ReactComponent as VelogIco } from "../images/icons/velog.svg"

export default function Profile(){

 return(
  <ProcfileDiv>
    <Column location="left">
      <H1>정윤서</H1>
      <H2>Front-End 개발자</H2>
    </Column>
    <Column location="right">
      <ul>
        <li>
          <a href="https://github.com/Avoler0" target="_blank">
            <GithubIco width="40" fill="#181717"/>
          </a>
        </li>
        <a href="https://velog.io/@avoler" target="_blank">
          <li>
            <VelogIco width="40" fill="#20C997" />
          </li>
        </a>
      </ul>
      <p>
        Birth: 
        <span>1998.01.10</span>
      </p>
      <p>
        Email: 
        <span>jys1391@gmail.com</span>
      </p>
      <p>
        Phone:
          <span style={{letterSpacing:"1.8px"}}>010-5897-8991</span>
      </p>
    </Column>
  </ProcfileDiv>
 ) 
}
const ProcfileDiv = styled.div`
  margin-top: 3rem;
  height: 9rem;
  @media (max-width: 768px) {
    margin:0;
    padding: 1rem;
    height: 16rem;
  }
`;
const Column = styled.div<{location:string}>`
  float: ${props => props.location};
  @media (max-width: 768px) {
    float: none;
  }
  ul{
    padding: 0;
    
  }
  li{
    display: inline-block;
    margin-right:1rem;
  }
  svg{
    cursor: pointer;
    transition: all ease-in-out 0.2s;
    :hover{
      transform: scale(1.1);
    }
  }
  p{
    margin: 0;
    letter-spacing: 1px;
    span{
      font-weight: 500;
      font-size: 1.1rem;
      line-height: 1rem;
      :hover{
        cursor: pointer;
        text-decoration: underline;
        
      }
    }
  }
`
const H1 = styled.h1`
  margin: 0;
  font-size: 1.9rem;
  font-weight: 600;
`;
const H2 = styled.h1`
  margin: 0;
  font-size: 1.7rem;
  font-weight: 500;
`;