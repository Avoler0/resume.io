import styled from "styled-components"
import { ReactComponent as GithubIco } from "../images/icons/github.svg"
import { ReactComponent as VelogIco } from "../images/icons/velog.svg"
export default function Profile(){

 return(
  <ProfileDiv id="Profile">
    <Column location="left">
      <H1>정윤서</H1>
      <H2>Front-End 개발자</H2>
    </Column>
    <Column location="right">
      <ul>
        <li><GithubIco width="40" fill="#181717"/></li>
        <li><VelogIco width="40" fill="#20C997" /></li>
      </ul>
      <p>
        Email: 
        <span>jys1391@gmail.com</span>
      </p>
      <p>
        Blog:
        <span>https://velog.io/@avoler</span>
      </p>
      <p>
        Phone:
        <span style={{letterSpacing:"1.8px"}}>010-5897-8991</span>
      </p>
    </Column>
  </ProfileDiv>
 ) 
}
const ProfileDiv = styled.div`
  margin-top: 3rem;
  height: 9rem;
`;
const Column = styled.div<{location:string}>`
  float: ${props => props.location};
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