/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-11-01 15:29:40
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-11-03 23:59:22
 */
import React, { Component } from 'react'
import {
    Layout,
    Col,
    BackTop
} from 'antd'
import {
    Route
} from 'react-router-dom'
import HeaderCustom from '../header'
import SiderCustom from '../sider'
import routes from '../../../routes/web'
import './index.less'

const { Content, Footer } = Layout

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        document.title = 'icdong博客'
    }
    render() {
        const contentHeight = document.body.clientHeight - 64 - 62
        return (
            <div>
                <Layout className="wrapper">

                    <HeaderCustom {...this.props}></HeaderCustom>

                    <Layout className="wrapper-container">
                        <Layout className="wrapper-content">
                            <Content style={{ paddingTop: 24, margin: 0, minHeight: contentHeight, height: '100%', overflow: 'initial' }}>
                                <Col
                                    lg={{ span: 5, offset: 1 }}
                                    md={{ span: 6, offset: 1 }}
                                    xs={{ span: 0 }}
                                >
                                    <SiderCustom {...this.props} />
                                </Col>
                                <Col
                                    lg={{ span: 16, offset: 1 }}
                                    md={{ span: 16, offset: 1 }}
                                    xs={{ span: 24 }}
                                    className="about-wrapper"
                                >
                                    {
                                        routes.map(({ path, key, component, ...props }, index) => (
                                            <Route key={index}
                                                exact
                                                path={path}
                                                component={component}
                                                {...props}
                                            />
                                        ))
                                    }
                                </Col>
                            </Content>
                        </Layout>
                        <Footer style={{ textAlign: 'center' }}>
                            Copyright © Daito Chai 2019
                        </Footer>
                    </Layout>
                </Layout>
                <BackTop visibilityHeight='100' />
            </div>
        )
    }
}

export default Index