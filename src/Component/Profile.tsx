import styled from "styled-components"
import { ReactComponent as GithubIco } from "../images/icons/github.svg"
import { ReactComponent as VelogIco } from "../images/icons/velog.svg"

export default function Profile(){

 return(
  <ProcfileDiv>
    <Column location="left" >
        <H1>정윤서</H1>
        <H2>Front-End 개발자</H2>
    </Column>
    <Column location="left" >
      <ImageDiv>
        <Image src="https://user-images.githubusercontent.com/91608021/191460061-03d70fd9-aa6b-48f5-8b4c-14cf124540d2.jpg" />
      </ImageDiv>
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
      <div>
        <p>
          Birth: 
          <span> 1998.01.10</span>
        </p>
        <p>
          Email: 
          <span> jys1391@gmail.com</span>
        </p>
        <p>
          Phone:
            <span style={{letterSpacing:"1.8px"}}> 010-5897-8991</span>
        </p>
      </div>
    </Column>
  </ProcfileDiv>
 ) 
}
const ProcfileDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  height: 10rem;
  @media (max-width: 768px) {
    display: block;
    margin:0 0 10rem 0;
    padding: 1rem;
    height: 16rem;
    h1{
      text-align: center;
    }
  }
`;
const ImageDiv = styled.div`
  text-align: center;
  margin: 0 auto;
`;
const Image = styled.img`
  width: 200px;
  border-radius: 200px;
`;
const Column = styled.div<{location:string}>`
  margin: 0 auto;
  align-items: center;
  @media (max-width: 768px) {
    display: ${props => props.location === "right" ? "flex" : "block"};
    justify-content: center;
    float: none;
  }
  ul{
    padding: 0;
    @media (max-width: 768px) {
      margin-top: 1rem;
      margin-left: 1rem;
    }
  }
  li{
    display: inline-block;
    margin-right:1rem;
    @media (max-width: 768px) {
      display: block;
    }
  }
  svg{
    cursor: pointer;
    transition: all ease-in-out 0.2s;
    :hover{
      transform: scale(1.1);
    }
  }
  div{
    @media (max-width: 768px) {
      padding: 0.5rem;
    }
  }
  p{
    margin: 0;
    letter-spacing: 1px;
    @media (max-width: 768px) {
      margin: 0.4rem auto;
      font-weight: bold;
    }
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
  font-size: 2.2rem;
  font-weight: 600;
`;
const H2 = styled.h1`
  margin: 0;
  font-size: 1.8rem;
  font-weight: 500;
`;