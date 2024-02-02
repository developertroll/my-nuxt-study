export default defineEventHandler((event) => {
  const initData = [
    {
      idx: 0,
      title: "그룹웨어 1.0",
      description: "vue.js로 만든 그룹웨어",
      detail:
        "vue.js로 만든 그룹웨어입니다. 결재, 프로젝트 관리, 일정관리, 게시판, 내부 메시지 기능을 가지고 있습니다.",
      link: "",
      imgLink: "/img/group1.png",
    },
    {
      idx: 1,
      title: "그룹웨어 2.0",
      description: "그룹웨어 1.0을 리뉴얼한 프로젝트",
      detail:
        "그룹웨어 1.0에서 일정 api를 제외하고 실시간 채팅 기능을 추가한 프로젝트입니다. 카톡과 유사하게 그룹방, 1:1채팅 기능이 포함되어있고 코드 개선과 컴포넌트 분리가 진행되었습니다.",
      link: "https://developertroll.github.io/vue-projectver2/",
      imgLink: "/img/group2.png",
    },
    {
      idx: 2,
      title: "todoList",
      description: "nodejs를 통해 실제 도메인을 가진 사이트",
      detail:
        "nodejs를 통해 aws ec2에 설치한 서버에 배포한 프로젝트입니다. 실제 도메인을 가지고 있으며 회원가입, 로그인, todoList 기능을 가지고 있습니다.",
      link: "https://www.successschedule.shop/",
      imgLink: "/img/todo.png",
    },
    {
      idx: 3,
      title: "포트폴리오 사이트",
      description: "nuxt.js를 활용해 포트폴리오를 모아놓은 사이트",
      detail:
        "nuxt.js를 활용해 만든 포트폴리오 사이트입니다. nuxt.js의 기본적인 기능과 vuetify를 활용해 만들었습니다.",
      link: "placeholder",
      imgLink: "placeholder",
    },
  ];
  return {
    api: "works",
    data: initData,
  };
});
