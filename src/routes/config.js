import  Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
// import Layout from '../components/layout'
let routes = [
  {
    path: '/',
    children: [
      { path: '/dashboard', component: Dashboard}
    ]
  },
  {
    path: '/login',
    component: Login
  }
 ]; 

 export default routes;