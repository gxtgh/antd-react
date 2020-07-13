import React from 'react';
import { Layout } from 'antd';
import {Route} from 'react-router-dom';
import LayoutSider from './sider';
import LayoutHeader from './header';


import Dashboard from '../../pages/Dashboard';
import UserIndex from '../../pages/User';

import './index.scss';
const { Content } = Layout;
export default class LayoutIndex extends React.Component {
    state = {
        collapsed: false
    }
    componentDidMount() {

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
                    <LayoutHeader />
                    <Content className="layoutContent">
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/user/index" component={UserIndex} />
                    </Content>
                </Layout>
            </Layout>
        )
    }
}