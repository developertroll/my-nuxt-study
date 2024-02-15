import { d as defineEventHandler } from './nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const Project = defineEventHandler((event) => {
  const initData = [
    {
      idx: 0,
      title: "\uADF8\uB8F9\uC6E8\uC5B4 1.0",
      description: "vue.js\uB85C \uB9CC\uB4E0 \uADF8\uB8F9\uC6E8\uC5B4",
      detail: "vue.js\uB85C \uB9CC\uB4E0 \uADF8\uB8F9\uC6E8\uC5B4\uC785\uB2C8\uB2E4. \uACB0\uC7AC, \uD504\uB85C\uC81D\uD2B8 \uAD00\uB9AC, \uC77C\uC815\uAD00\uB9AC, \uAC8C\uC2DC\uD310, \uB0B4\uBD80 \uBA54\uC2DC\uC9C0 \uAE30\uB2A5\uC744 \uAC00\uC9C0\uACE0 \uC788\uC2B5\uB2C8\uB2E4.",
      link: "https://developertroll.github.io/vue-project-Build/",
      imgLink: "/img/group1.png",
      tags: ["vue.js", "element-ui"]
    },
    {
      idx: 1,
      title: "\uADF8\uB8F9\uC6E8\uC5B4 2.0",
      description: "\uADF8\uB8F9\uC6E8\uC5B4 1.0\uC744 \uB9AC\uB274\uC5BC\uD55C \uD504\uB85C\uC81D\uD2B8",
      detail: "\uADF8\uB8F9\uC6E8\uC5B4 1.0\uC5D0\uC11C \uC77C\uC815 api\uB97C \uC81C\uC678\uD558\uACE0 \uC2E4\uC2DC\uAC04 \uCC44\uD305 \uAE30\uB2A5\uC744 \uCD94\uAC00\uD55C \uD504\uB85C\uC81D\uD2B8\uC785\uB2C8\uB2E4. \uCE74\uD1A1\uACFC \uC720\uC0AC\uD558\uAC8C \uADF8\uB8F9\uBC29, 1:1\uCC44\uD305 \uAE30\uB2A5\uC774 \uD3EC\uD568\uB418\uC5B4\uC788\uACE0 \uCF54\uB4DC \uAC1C\uC120\uACFC \uCEF4\uD3EC\uB10C\uD2B8 \uBD84\uB9AC\uAC00 \uC9C4\uD589\uB418\uC5C8\uC2B5\uB2C8\uB2E4.",
      link: "https://developertroll.github.io/vue-projectver2/",
      imgLink: "/img/group2.png",
      tags: ["vue.js", "element-ui"]
    },
    {
      idx: 2,
      title: "todoList",
      description: "nodejs\uB97C \uD1B5\uD574 \uC2E4\uC81C \uB3C4\uBA54\uC778\uC744 \uAC00\uC9C4 \uC0AC\uC774\uD2B8",
      detail: "nodejs\uB97C \uD1B5\uD574 aws ec2\uC5D0 \uC124\uCE58\uD55C \uC11C\uBC84\uC5D0 \uBC30\uD3EC\uD55C \uD504\uB85C\uC81D\uD2B8\uC785\uB2C8\uB2E4. \uC2E4\uC81C \uB3C4\uBA54\uC778\uC744 \uAC00\uC9C0\uACE0 \uC788\uC73C\uBA70 \uD68C\uC6D0\uAC00\uC785, \uB85C\uADF8\uC778, todoList \uAE30\uB2A5\uC744 \uAC00\uC9C0\uACE0 \uC788\uC2B5\uB2C8\uB2E4.",
      link: "https://www.successschedule.shop/",
      imgLink: "/img/todo.png",
      tags: ["nodejs", "express", "mysql"]
    },
    {
      idx: 3,
      title: "\uD3EC\uD2B8\uD3F4\uB9AC\uC624 \uC0AC\uC774\uD2B8",
      description: "nuxt.js\uB97C \uD65C\uC6A9\uD574 \uD3EC\uD2B8\uD3F4\uB9AC\uC624\uB97C \uBAA8\uC544\uB193\uC740 \uC0AC\uC774\uD2B8(\uD604\uC7AC \uC0AC\uC774\uD2B8)",
      detail: "nuxt.js\uB97C \uD65C\uC6A9\uD574 \uB9CC\uB4E0 \uD3EC\uD2B8\uD3F4\uB9AC\uC624 \uC0AC\uC774\uD2B8\uC785\uB2C8\uB2E4. nuxt.js\uC758 \uAE30\uBCF8\uC801\uC778 \uAE30\uB2A5\uACFC vuetify\uB97C \uD65C\uC6A9\uD574 \uB9CC\uB4E4\uC5C8\uC2B5\uB2C8\uB2E4. \uD604\uC7AC \uC774 \uC0AC\uC774\uD2B8\uC774\uBA70, \uCD94\uD6C4 \uB2E4\uB978 \uD504\uB85C\uC81D\uD2B8\uC640 \uD3EC\uD2B8\uD3F4\uB9AC\uC624\uB97C \uCD94\uAC00\uD558\uAE30 \uC27D\uB3C4\uB85D \uB9CC\uB4E4\uC5C8\uC2B5\uB2C8\uB2E4.",
      link: "https://test.deo9rfjlyfmtg.amplifyapp.com/",
      imgLink: "/img/portpolio.png",
      tags: ["nuxt.js", "vuetify"]
    },
    {
      idx: 4,
      title: "nextjs \uAC04\uC774 \uC1FC\uD551\uBAB0",
      description: "nextjs, react\uB97C \uD65C\uC6A9\uD55C \uAC04\uC774 \uC1FC\uD551\uBAB0",
      detail: "nextjs, react\uB97C \uD65C\uC6A9\uD55C \uAC04\uC774 \uC1FC\uD551\uBAB0\uC785\uB2C8\uB2E4. \uC0C1\uD488 \uB9AC\uC2A4\uD2B8\uB97C \uCE74\uB4DC \uD615\uC2DD\uC73C\uB85C \uBCF4\uC5EC\uC8FC\uACE0, \uAC8C\uC2DC\uD310 \uAE30\uB2A5\uC744 \uAC00\uC9C0\uACE0 \uC788\uC2B5\uB2C8\uB2E4. react \uC5F0\uC2B5\uC73C\uB85C \uB9CC\uB4E0 \uAC04\uC774 \uAE30\uB2A5\uB4E4\uC744 nextjs\uB85C \uC62E\uAE30\uACE0, ui \uAE30\uBC18\uC744 bootstrap -> mui\uB85C \uBCC0\uACBD\uD558\uB294 \uC791\uC5C5\uC774 \uC9C4\uD589\uC911\uC785\uB2C8\uB2E4.",
      link: "placeholder",
      imgLink: "placeholder",
      tags: ["nextjs", "react", "redux"]
    }
  ];
  return {
    api: "works",
    data: initData
  };
});

export { Project as default };
//# sourceMappingURL=Project.mjs.map
