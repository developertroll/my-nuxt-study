import { A as defineNuxtPlugin } from '../server.mjs';
import 'vue';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@fortawesome/free-solid-svg-icons';
import 'vue/server-renderer';

const auth = defineNuxtPlugin((to, from) => {
  console.log(to);
  console.log(from);
});

export { auth as default };
//# sourceMappingURL=auth-jweM5CfF.mjs.map
