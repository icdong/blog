/*
 * @Description:
 * @Author: Do not edit
 * @Date: 2020-11-01 15:28:06
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-11-01 16:50:46
 */
const sequelize = require('../sequelize')
const Sequelize = require('sequelize')
const moment = require('moment')

const article = sequelize.define('article', {
    id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        allowNull: false,
        type: Sequelize.STRING(255),
        unique: {
            msg: '已添加'
        }
    },
    readedCount: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    author: Sequelize.STRING,
    summary: Sequelize.STRING,
    category: Sequelize.STRING,
    tag: Sequelize.STRING,
    content: Sequelize.TEXT('long'),
    createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        get () {
            return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm')
        }
    },
    updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        get () {
            return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm')
        }
    }
},
{
    freezeTableName: true
})

module.exports = article
