import React from 'react';
import { Layout, Menu, } from 'antd';
import { Link  } from 'react-router-dom';
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
  componentDidMount(){
    // console.log(this)
  }

  render(){
    return (
      <Sider className="layoutSide" collapsed={this.state.collapsed}>
        <div className="layouSideLogo" onClick={this.toggleCollapsed}>
          {
            this.state.collapsed?'数据中台':<Link to="/"><span>数据中台</span></Link>
          }
        </div>
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
            <SubMenu key="sub2" icon={<MailOutlined />} title="Antd">
                <Menu.Item key="3">
                    <Link to="/antd/index"><span>antd</span></Link>
                </Menu.Item>
            </SubMenu>
        </Menu>
    </Sider>
    )
  }
}