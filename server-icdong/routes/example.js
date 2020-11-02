/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-11-01 15:28:06
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-11-01 16:51:43
 */
const Router = require('koa-router')
const router = new Router()
const Example = require('../controllers/example')

router.get('/test', async ctx => {
    ctx.body = 'success requset'
})
router.get('/list', Example.list)
router.post('/create', Example.creat)

module.exports = router