const koa = require('koa')
const router = require('koa-router')()
const bodyparser = require('koa-bodyparser')
const fs = require('fs')

const routerMap = require('./middleware/routerMap')

const app = new koa()



app.use(bodyparser())
app.use(routerMap())
app.use(router.routes())

app.listen(8081)















