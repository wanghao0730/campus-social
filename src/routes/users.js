const router = require('koa-router')()

router.prefix('/users')

router.get("/profiles/:userName",async (ctx,next) => {
  console.log(ctx);
  const {userName} = ctx.params
  console.log(userName)
  ctx.body = {
    titl:'hh'
  }
})

router.post("/login",async (ctx,next) => {
  //从body中获取数据
  const { userName,pageIndex} = ctx.request.body 
  console.log({userName,pageIndex});
  ctx.body = {
    code:100,
    userName,
    pageIndex
  }
})

module.exports = router
