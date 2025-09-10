import { createDefine } from "fresh";

const app = createDefine();
export const handler = app.handlers({
  async GET(ctx) {
    const name = ctx.params.id;

    const kv = await Deno.openKv();
    await kv.set(["name"], name, { expireIn: 60_000 });

    const kvValue = await kv.get(["name"]);
    console.log(kvValue.value);
    return new Response(
      `Hello, ${name}!`,
    );
  },
});
