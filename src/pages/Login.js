import React from 'react'
import { Form, Input, Button, Checkbox, Card, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./login.css"
import { setToken } from "../utils/auth"

class Login extends React.Component{

    onFinish = (values) => {
        console.log('loginForm: ', values);
        setToken(values.username);
        this.props.history.push('/admin');
        message.success("登录成功");
    }
    onFinishFailed(values) {
        console.log('onFinishFailed', values);
        message.error("登录失败");
    }


    
    render(){
        return (
            <Card title="后台管理系统" className="login-form">
            <Form 
                name="normal_login"
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
                onFinishFailed = {this.onFinishFailed}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: '请输入用户名!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                </Form.Item>
                <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入密码!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="密码"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>记住我</Checkbox>
                    </Form.Item>
                </Form.Item>
        
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                </Form.Item>
            </Form>
          </Card>
        )
    }
}

export default Login;