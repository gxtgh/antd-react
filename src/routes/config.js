import NotFound from '../pages/Public/NotFound';
import Login from '../pages/Login';
import Index from '../pages/Index';
import Test from '../pages/Test';

import Layout from '../components/layout';

import  Dashboard from '../pages/Dashboard';
import UserIndex from '../pages/User';
import Antd from '../pages/Antd';

let routes = [
  // 示例
 /* {
    path:'',//地址
    component: '', //组件
    exact: false, //默认为false,需要和路由相同时才能匹配，但是如果有斜杠也是可以匹配上的.如果在父路由中加了exact，是不能匹配子路由的,建议在子路由中加exact
    strict: false, // 默认为false,如果为true时，路由后面有斜杠而url中没有斜杠，是不匹配的
    requiresAuth: false, // 是否需要登录才能跳转的界面
  },*/
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Index,
    exact: true,
  },
  {
    path: '/test',
    component: Test
  },
  {
    path: '/404',
    component: NotFound
  },
  {
    // path: '/user',
    component: Layout,
    requiresAuth: true,
    routes: [
      { 
        path: '/dashboard',
        component: Dashboard
      },
      { 
        path: '/user/index', 
        component: UserIndex,
        exact: true,
      },
      { 
        path: '/antd/index', 
        component: Antd
      },
    ]
  },
  {
    path: '*',
    component: NotFound
  },
 ]; 

 export default routes;