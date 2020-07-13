import React from 'react';
import { Layout, Menu, } from 'antd';
import { Link } from 'react-router-dom';
import {
  PieChartOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;
export default class LayoutSider extends React.Component {
  state = {
    collapsed: false
  }

  toggleCollapsed = () =>{
    this.setState({
        collapsed: !this.state.collapsed
    });
  } 

  render(){
    return (
      <Sider className="layoutSide" collapsed={this.state.collapsed}>
        <div className="layouSideLogo" onClick={this.toggleCollapsed}>数据中台</div>
        <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
        >
            <Menu.Item key="1" icon={<PieChartOutlined />}>
                <Link to="/dashboard"><span>概览</span></Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<MailOutlined />} title="用户管理">
                <Menu.Item key="2">
                    <Link to="/user/index"><span>用户列表</span></Link>
                </Menu.Item>
            </SubMenu>
        </Menu>
    </Sider>
    )
  }
}