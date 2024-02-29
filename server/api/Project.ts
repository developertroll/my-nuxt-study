export default defineEventHandler((event) => {
  const initData = [
    {
      idx: 0,
      title: "그룹웨어 1.0",
      description: "vue.js로 만든 그룹웨어",
      detail:
        "vue.js로 만든 그룹웨어입니다. 결재, 프로젝트 관리, 일정관리, 게시판, 내부 메시지 기능을 가지고 있습니다.",
      link: "https://developertroll.github.io/vue-project-Build/",
      imgLink: "/img/group1.png",
      tags: ["vue.js", "element-ui"],
    },
    {
      idx: 1,
      title: "그룹웨어 2.0",
      description: "그룹웨어 1.0을 리뉴얼한 프로젝트",
      detail:
        "그룹웨어 1.0에서 일정 api를 제외하고 실시간 채팅 기능을 추가한 프로젝트입니다. 카톡과 유사하게 그룹방, 1:1채팅 기능이 포함되어있고 코드 개선과 컴포넌트 분리가 진행되었습니다.",
      link: "https://developertroll.github.io/vue-projectver2/",
      imgLink: "/img/group2.png",
      tags: ["vue.js", "element-ui"],
    },
    {
      idx: 2,
      title: "todoList",
      description: "nodejs를 통해 실제 도메인을 가진 사이트",
      detail:
        "nodejs를 통해 aws ec2에 설치한 서버에 배포한 프로젝트입니다. 실제 도메인을 가지고 있으며 회원가입, 로그인, todoList 기능을 가지고 있습니다.",
      link: "https://www.successschedule.shop/",
      imgLink: "/img/todo.png",
      tags: ["nodejs", "express", "mysql"],
    },
    {
      idx: 3,
      title: "포트폴리오 사이트",
      description: "nuxt.js를 활용해 포트폴리오를 모아놓은 사이트(현재 사이트)",
      detail:
        "nuxt.js를 활용해 만든 포트폴리오 사이트입니다. nuxt.js의 기본적인 기능과 vuetify를 활용해 만들었습니다. 현재 이 사이트이며, 추후 다른 프로젝트와 포트폴리오를 추가하기 쉽도록 만들었습니다.",
      link: "https://test.deo9rfjlyfmtg.amplifyapp.com/",
      imgLink: "/img/portpolio.png",
      tags: ["nuxt.js", "vuetify"],
    },
    {
      idx: 4,
      title: "고객문의 사이트",
      description: "vue.js와 vuetify를 이용해 만든 고객문의 사이트",
      detail:
        "vue.js와 vuetify를 이용해 만든 고객문의 사이트입니다. 고객이 문의를 남기면 관리자가 확인할 수 있도록 만들었습니다. 또한, 관리자가 답변을 남기면 고객이 확인할 수 있도록 만들었습니다. 관리자와 고객이 보는 화면이 분리되어 있고 관리자만 특정 정보에 접속하여 수정할 수 있게 되어있습니다.",
      link: "https://main.d27hglygzdetub.amplifyapp.com/",
      imgLink: "placeholder",
      tags: ["vue.js", "vuetify"],
    },
    {
      idx: 5,
      title: "nextjs 간이 쇼핑몰",
      description: "nextjs, react를 활용한 간이 쇼핑몰",
      detail:
        "nextjs, react를 활용한 간이 쇼핑몰입니다. 상품 리스트를 카드 형식으로 보여주고, 게시판 기능을 가지고 있습니다. react 연습으로 만든 간이 기능들을 nextjs로 옮기고, ui 기반을 bootstrap -> mui로 변경하는 작업이 진행중입니다.",
      link: "placeholder",
      imgLink: "placeholder",
      tags: ["nextjs", "react", "redux"],
    },
  ];
  return {
    api: "works",
    data: initData,
  };
});
