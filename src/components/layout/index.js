import React from 'react';
import { Layout } from 'antd';
import {Route } from 'react-router-dom';

import LayoutSider from './sider';
import LayoutHeader from './header';
// import Breadcurmb from './breadcrumb';
import './index.scss';
const { Content } = Layout;
export default class LayoutIndex extends React.Component {
  state = {
    collapsed: false
  }
  componentDidMount() {
    // console.log(this.props)
  }

  toggleCollapsed = () =>{
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <Layout className="layoutContainer">
        <LayoutSider/>
        <Layout>
          <LayoutHeader/>
          {/* <Breadcurmb /> */}
          <Content className="layoutContent">
            {
              this.props.routes.map((item, index) => {
                return(<Route key={index} path={item.path} exact={item.exact} component={item.component}/>)
              })
            }
          </Content>
        </Layout>
      </Layout>
    )
  }
}