import { App } from "@fresh/core";

const app = new App();

app.get("/:id", async (ctx) => {
	const usename = ctx.params.id;
	const kv = await Deno.openKv();
	console.log(kv);
	await kv.set(["user"], usename);
	let values = await kv.get(["user"]);
	console.log(values.value);
	return new Response(`usename:${usename}`);
});
app.listen();
