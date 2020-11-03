/*
 * @Description:
 * @Author: Do not edit
 * @Date: 2020-11-01 15:28:06
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-11-01 16:53:16
 */
const Sequelize = require('sequelize');

const sequelize = new Sequelize('Blog', 'admin', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})
sequelize
    .authenticate()
    .then(() => {
        console.log('MYSQL 连接成功......');
    })
    .catch(err => {
        console.error('链接失败:', err);
    });
// 根据模型自动创建表
sequelize.sync()

module.exports = sequelize
