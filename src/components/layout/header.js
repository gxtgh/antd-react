import React from 'react';
import { Layout, Avatar } from 'antd';
import { connect} from 'react-redux';
import {
  CaretDownOutlined,
} from '@ant-design/icons';

const { Header } = Layout;



 class LayoutHeader extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  render () {
    return (
      <Header className="layoutHeader">
        {/* <Breadcrumb separator=">>" className="breadcurmbContainer">
          <Breadcrumb.Item href="/dashboard">概览</Breadcrumb.Item>
        </Breadcrumb> */}
        <div></div>
        <div className="headerRight">
          <div className="userContainer">
              <Avatar size={40}  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              {this.props.userInfo.account}
              <CaretDownOutlined />
          </div>
        </div>
      </Header>
    )
  }
} 

const mapStateToProps = state => ({
  userInfo: state.reducers.userInfo
})

export default connect(mapStateToProps)(LayoutHeader);