
export const profile = {
  aboutme:[
    "안녕하세요","정윤서입니다."
  ]
}
export const project = {
  wewigg:function () {
    return (
      <>
        <p><strong>wewi.gg</strong>는 <strong>League of Legend</strong> 게임의 유저 정보 API를 활용하여 시각적으로 보여주는 사이트입니다.
        제작사인 Riot Games에서 배포하는 오픈 API를 사용하여 사용자의 게임의 전적과 게임 내부의 디테일들을 알 수 있습니다.</p>
        {/* 제작사인 Riot Games에서 배포하는 오픈 API를 사용하여 사용자의 게임  게전적, 무슨임 캐릭터를 선호하는지를 데이터로 알 수 있습니다.</p> */}
        {/* <p>개인 프로젝트로 이 프로젝트를 진행하면서 Restful API와 비동기 처리, 데이터를 처리하는 과정을 더 깊게 이해하려고 노력했고 구현에 해냈습니다. </p> */}
        {/* <p>Redux를 이용하여 로그인 전역을 구현하였고 , 게이머의 커뮤니티 느낌으로 백엔드와의 데이터 통신으로 유저의 구인 광고 데이터를 저장하는 기능도 추가하였습니다.</p> */}
        <p><b>Redux Toolkit</b>을 이용하여 로그인 성공 시 전역상태관리를 하였습니다.</p>
        <p><b>REST API</b> 통신시 promise, async await을 통한 비동기 통신으로 axios를 이용하여 데이터를 내려 받아 화면에 렌더링 해주었습니다.</p>
        <p>네이버와 google의 OAuth를 이용하여 토큰을 받아 서버에 저장 후 , 로그인 시 받아오는 기능을 구현하였습니다.</p>
      </>
    )
  },
  snplab:function () {
    return (
      <>
        <p>크라우드 워커 지원 페이지로 지원서를 추가하고 , 지원자의 처우를 처리하는 페이지입니다. 담당으로는 API 모듈을 추가하였습니다.</p>
        <p>대한민국의 도시 데이터 API를 받아오는 과정에 불필요한 호출이 많은 문제가 많아 cache기능을 추가하여 호출횟수를 줄여 렌더링에도 최적화가 되었습니다.</p>
      </>
    )
  },
  movieInfo:function () {
    return (
      <>
        <p>영화 정보 사이트</p>
        <p>123</p>
      </>
    )
  },
    tripbtoz:function () {
    return (
      <>
        <p><strong>tripbtoz</strong>의 기업과제로 5인 프로젝트로 구성된 호텔 목록과 , 예약을 할 수 있는 사이트입니다. 메인페이지를 담당했습니다.</p>
        <p>메인 페이지의 호텔 리스트를 스크롤을 내릴 때 마다 추가되는 infinity scroll을 구현하는 과정에서 px 단위마다 이벤트를 불러오는 문제가 있었습니다.</p>
        <p>이를 IntersectionObserver API를 사용해 마지막 card를 중심으로 화면에 타겟 카드가 보이면 이벤트가 실행되어 해결하였습니다.</p>
      </>
    )
  },
}
