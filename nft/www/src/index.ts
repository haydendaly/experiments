import * as Koa from "koa";
import * as Router from "koa-router";

import * as logger from "koa-logger";
import * as json from "koa-json";
import * as bodyParser from "koa-bodyparser";

const PORT = process.env.PORT || 3000;

const app = new Koa();
const router = new Router();

interface DataRequest {
  network?: string;
}

router.get("/", async (ctx, next) => {
  ctx.body = { msg: "Hello NFT!" };
  await next();
});

router.post("/", async (ctx, next) => {
  const data = <DataRequest>ctx.request.body;
  ctx.body = data;
  await next();
});

// Middlewares
app.use(json());
app.use(logger());
app.use(bodyParser());

// Routes
app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => {
  console.log("[www] started");
});
