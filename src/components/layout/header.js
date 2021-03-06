import React from 'react';
import { Layout, Avatar, Menu, Dropdown, notification   } from 'antd';
import { connect} from 'react-redux';
import {
  CaretDownOutlined,
} from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import { deleteUserInfo } from '../../store/actions';

const { Header } = Layout;



class LayoutHeader extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  logout =() =>{
    this.$post('/user/logout').then(res=>{
      this.props.dispatch(deleteUserInfo());
      notification.open({
        message: '退出成功',
        duration:3
      });
      this.props.history.push('/login');
    })
    
  }
  render () {
    return (
      <Header className="layoutHeader">
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

export default connect(mapStateToProps)(withRouter(LayoutHeader));