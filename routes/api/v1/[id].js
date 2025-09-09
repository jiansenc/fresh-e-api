import { createDefine } from "fresh";

const app = createDefine();
export const handler = app.handlers({
  GET(ctx) {
    const name = ctx.params.id;
    return new Response(
      `Hello, ${name}!`,
    );
  },
});
