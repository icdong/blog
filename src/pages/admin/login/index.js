/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-11-03 20:43:07
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-11-03 23:58:26
 */
import React from 'react'
import { Form, Icon, Input, Button, Card, message } from 'antd';
import Particles from 'reactparticles.js'
import './index.less'
import http from '../../../http'

class login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                const { code, desc, data } = await http.post('/loginIn', values)
                if (code === 1000) {
                    message.success(desc)
                    sessionStorage.setItem('blogUser', data.name)
                    sessionStorage.setItem('menuItmeKey', '0')
                    this.props.history.push('/admin/page')
                } else {
                    message.error(desc)
                }
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='login'>
                <Particles id="particles1" config="particles1.json" height='90%' />
                <Card className="login-form" style={{ width: 300, borderRadius: 4 }}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: '请输入用户名' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
                            )}
                        </Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" block>Log in</Button>
                    </Form>
                </Card>
            </div>
        )
    }
}

const Login = Form.create({ name: 'normal_login' })(login)

export default Login
