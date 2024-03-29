/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-11-03 20:43:08
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-11-03 23:59:46
 */
import React, { Component } from 'react'
import avatar from '../../../assets/lf.jpg'
import {
    Card,
    Tag,
    Divider,
} from 'antd'
import './index.less'
import http from '../../../http'
import { color } from '../../../utils'

class SiderCustom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tags: [],
            articleData: []
        }
    }
    componentDidMount() {
        this.getTags()
        this.getArticleList()
    }
    async getArticleList() {
        const { data, code } = await http.get('/article/list', { pageNo: 1, pageSize: 5 })
        code === 1000 && this.setState({ articleData: data })
    }
    async getTags() {
        const { data, code } = await http.get('tag/list/all')
        code === 1000 && this.setState({ tags: data })
    }
    handleDetail(id) {
        this.props.history.push(`/web/detail/${id}`)
    }
    render() {
        const list = this.state.articleData.map(v => (
            <li key={v.id} onClick={this.handleDetail.bind(this, v.id)}>
                {v.title}
            </li>
        ))
        return (
            <div className="sider-container">
                <div className="admin-info">
                    <header>
                        <img src={avatar} alt="avatar" title='我叫路飞，要成为海贼王的男人' />
                    </header>
                    <p className="admin-name">
                        柴少
                    </p>
                    <p className="admin-desc">
                        不爱骑行，不爱跳舞
                        <br />
                        前端摸鱼人员，全村最靓的仔
                    </p>
                </div>
                <div className="recent-article">
                    <Card bordered={false}>
                        <Divider orientation="left">最近文章</Divider>
                        <ul className="recent-list">
                            {list}
                        </ul>
                    </Card>
                </div>
                <div className="tags-wrapper">
                    <Card bordered={false}>
                        <Divider orientation="left">标签</Divider>
                        <div className="tags-content">
                            {
                                this.state.tags.map(v => (
                                    <Tag
                                        key={v.id}
                                        color={color[Math.floor(Math.random() * color.length)]}
                                    >
                                        {v.name}
                                    </Tag>
                                ))
                            }
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}

export default SiderCustom
