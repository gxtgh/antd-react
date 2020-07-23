import React from 'react';
import { Layout, Avatar, Menu, Dropdown, notification   } from 'antd';
import { connect} from 'react-redux';
import {
  CaretDownOutlined,
} from '@ant-design/icons';

import { deleteUserInfo } from '../../store/actions';

const { Header } = Layout;



class LayoutHeader extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  logout =() =>{
    this.$post('/user/logout').then(res=>{
      // console.log(res);
      this.props.dispatch(deleteUserInfo());
      notification.open({
        message: '退出成功',
        duration:3
      });
      setTimeout(()=>{
        window.location.href="/login";
      },0)
    })
    
  }
  render () {
    return (
      <Header className="layoutHeader">
        {/* <Breadcrumb separator=">>" className="breadcurmbContainer">
          <Breadcrumb.Item href="/dashboard">概览</Breadcrumb.Item>
        </Breadcrumb> */}
        <div></div>
        <div className="headerRight">
          <Dropdown overlay={()=>
            (<Menu>
              <Menu.Item onClick={this.logout}>退出</Menu.Item>
            </Menu>)}>
            <div className="userContainer">
                <Avatar size={40}  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                {this.props.userInfo.account}
                <CaretDownOutlined />
            </div>
          </Dropdown>
        </div>
      </Header>
    )
  }
} 

const mapStateToProps = state => ({
  userInfo: state.reducers.userInfo
})

export default connect(mapStateToProps)(LayoutHeader);