const  Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const HomeRoutes = require('./home.router');

const app = new Koa();

// app.use(ctx => {
//    ctx.body = 'Hello Wolrd';
// });

app.use(bodyParser());
app.use(HomeRoutes.routes())
    .use(HomeRoutes.allowedMethods());

app.listen(3000);
console.log('Application is running on port 3000');

//5. command to run --> node server.js
