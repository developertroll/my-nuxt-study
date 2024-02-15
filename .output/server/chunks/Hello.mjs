import { d as defineEventHandler } from './nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const Hello = defineEventHandler((event) => {
  return {
    api: "works"
  };
});

export { Hello as default };
//# sourceMappingURL=Hello.mjs.map
