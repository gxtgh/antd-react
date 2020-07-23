import React from 'react';
import {Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { addUserInfo } from '../../store/actions';
import  './index.scss'
class Login extends React.Component {
  onFinish = (data) =>{
    this.$post('/user/login',data)
    .then(data=>{
      // console.log(data)
      this.props.dispatch(addUserInfo(data))
      window.location.href="/dashboard"
      // this.props.history.push({
      //   pathname: '/user'
      // });
    }).catch(error=>{
      console.log(error)
    }).finally(()=>{
      // console.log('')
    })
    // console.log(data)

  }

  render() {
    return (
      <div className="loginContainer">
        <Form className="loginForm"
          onFinish={this.onFinish}
        >
          <Form.Item >
            <h2 className="loginTitle">标题</h2>
          </Form.Item>
          <Form.Item
            label="账号"
            name="account"
            rules={[{ required:true, message:'请输入账号'}]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{required:true, message:'请输入密码'}]}
          >
            <Input.Password/>
          </Form.Item>
          <Form.Item className="submitItem">
            <Button type="dashed" htmlType="submit" className="loginSubmit">登录</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default connect()(Login);