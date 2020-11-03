/*
 * @Description:
 * @Author: Do not edit
 * @Date: 2020-11-01 15:29:40
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-11-03 23:58:48
 */
import React, { Component } from 'react'
import './index.less'

import { Divider, Icon, Card } from 'antd'


class About extends Component {
    state = { commentList: [] }


    render() {
        return (
            <Card bordered={false}>
                <div className="content-inner-wrapper about">
                    <Divider orientation="left">Blog</Divider>
                    <p>react + react-router + mbox技术栈</p>
                    <p>纯函数式开发</p>
                    <p>前端：react + antd + react-router + es6 + webpack + axios</p>
                    <p>服务端：koa2 + mysql + sequelize</p>
                    <p className='code'>源码戳这里</p>
                    <p>
                        <a
                            target="_blank"
                            className='link'
                            rel="noreferrer noopener"
                            href="https://github.com/icdong/blog">
                            源码
                        </a>
                    </p>
                    <Divider orientation="left">Me</Divider>
                    <ul className="about-list">
                        <li>Daito Chai</li>
                        <li>
                            <Icon type="github" style={{ fontSize: '16px' }} />：
            <a
                                target="_blank"
                                className='link'
                                rel="noreferrer noopener"
                                href="https://github.com/icdong">
                                github
            </a>
                        </li>
                        <li>
                            联系方式：
                            <Divider type="vertical" />
                            <i className="iconfont icon-email" />
                            <a href="mailto:i@icdong.com">i@icdong.com</a>
                        </li>
                    </ul>
                </div>
            </Card>
        )
    }
}

export default About
