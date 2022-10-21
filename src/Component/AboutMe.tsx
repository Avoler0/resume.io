import styled from "styled-components"
import { H3 } from "./CommonStyle";

export default function AboutMe(){
  const selfText = `꾸준한 Git Commit으로 매일 발전해 나아가는 개발자 정윤서입니다.
저는 어려서부터 내가 직접 만든 결과물에 대해 흥미가 많았습니다.
고등학교 졸업 후 진로에 대한 고민을 하던 중에 내가 흥미가 있고 관심이 있는 것에 대해 일을 할 때 좋은 결과를 낼 수 있다고 생각하여
이전부터 제가 관심 있던 프로그래밍을 시작하였고, 지금까지 이어오고 있으며 그 꿈을 실현하기 위해 개발자를 준비하고 있습니다.`
  const reasonText = `지금 시대에는 서비스가 세상을 좀 더 쾌적하게 바꾸고 있습니다.
의술은 사람을 살리고 교육은 사람을 가르치지만 개발자는 세상을 바꾼다는 조금은 허황되지만 큰 꿈을 가질 수 있는 것 같습니다.
서비스를 만들기 위해서는 사용자의 니즈에 맞춰 사용자의 쾌적한 서비스 환경이 마련되어야 하며
빠른 MVP 모델과 견고한 아키텍처를 기반으로 구김 없는 서비스가 기본이 되어야 한다고 이해했습니다.
때문에 저는 이 기술로 사람들의 삶을 개선할 수 있는 프로그래밍을 시작했고 그 꿈을 이어가려고 합니다.`
  const programerText = `소통을 잘하고 빠르게 성장하는 개발자가 되고 싶습니다.
개발자에게 소통은 중요한 요소입니다.
코드 리뷰를 통한 팀원들과의 코드 공유, 이해를 하고
각 분야의 개발자들과 협업을 진행하니 트러블 없는 이해관계가 중요하다고 여깁니다.
그리고 프런트엔드 기술은 빠르게 변화를 맞이합니다.
이 변화에 빠르게 따라가고 적응할 수 있는 개발자가 되고 싶습니다.
이러한 개발자가 되기 위해서는 Resourceful 하게 주도적으로 개발을 진행할 수 있는 개발자라고 생각합니다.`
  return (
    <Container>
      <H3>About Me</H3>
      <Content>
        <MyContent>
          <Title>자기소개</Title>
          <Text>
            {selfText}
          </Text>
        </MyContent>
        <MyContent>
          <Title>개발자라는 직업을 선택하게 된 이유</Title>
          <Text>
            {reasonText}
          </Text>
        </MyContent>
        <MyContent>
          <Title>어떤 개발자가 되고 싶은가요</Title>
          <Text>
            {programerText}
          </Text>
        </MyContent>
      </Content>
    </Container>
  )
}
const Container = styled.div`
  margin: 5rem auto;
  @media (max-width: 768px) {
    margin: 15rem auto;
  }
`;
const Content = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const Title = styled.h2`
  margin: 0.2rem 0;
  font-size: 1.8rem;
  color: #be9e74;
`;
const MyContent = styled.div`
  margin-bottom: 2rem;
`;

const Text = styled.div`
  white-space: pre-wrap;
  font-size: 1.1rem;
  font-weight: 600;
`;