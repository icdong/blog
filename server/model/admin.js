/*
 * @Description:
 * @Author: Do not edit
 * @Date: 2020-11-01 15:28:06
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-11-01 16:50:36
 */
const sequelize = require('../sequelize')
const Sequelize = require('sequelize')

const admin = sequelize.define('admin',
    {
        id: {
            type: Sequelize.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            unique: {
                msg: '已添加'
            }
        },
        password: {
            type: Sequelize.INTEGER(6)
        }
    },
    {
        freezeTableName: true
    }
)

// // 初始化账户
// admin.create({
//     name: 'admin',
//     password: '123456'
// }).done((err, result) => {
//     console.log(err)
//     console.log(result)
// })

module.exports = admin
