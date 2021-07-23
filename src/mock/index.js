/*
 * @Description:
 * @Author: Daito Chai
 * @Date: 2021-07-21 17:46:09
 * @LastEditors: Daito Chai
 * @LastEditTime: 2021-07-23 10:21:15
 */
import Mock from 'mockjs'

import { all, } from './modules/all'
import { list } from './modules/list'
import { starList } from './modules/starList'
import { detail } from './modules/detail'

Mock.mock(RegExp('/api/tag/list/all.*'), all)
Mock.mock(RegExp('/api/article/list.*'), list)

// 文章收藏
Mock.mock(RegExp('/api/star/list.*'), starList)

// 文章详情
Mock.mock(RegExp('/api/article/detail.*'), detail)

export default Mock