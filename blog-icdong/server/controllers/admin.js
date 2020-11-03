/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-11-01 15:28:06
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-11-01 16:50:03
 */
const Tag = require('../model/admin')
const Op = require('sequelize').Op

const loginIn = async (ctx) => {
    const user = ctx.request.body
    const data = await Tag.findOne({
        where: {
            name: {
                [Op.eq]: `${user.userName}`
            },
            password: user.password
        }
    })
    ctx.body = {
        code: data ? 1000 : 1003,
        data,
        desc: data ? '登陆成功' : '账号或密码错误'
    }
}

module.exports = {
    loginIn
}