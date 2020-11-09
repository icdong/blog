/*
 * @Description:
 * @Author: Do not edit
 * @Date: 2020-11-01 15:28:06
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-11-01 16:50:56
 */
const sequelize = require('../sequelize')
const Sequelize = require('sequelize')
const moment = require('moment')

const category = sequelize.define('category', {
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

module.exports = category
