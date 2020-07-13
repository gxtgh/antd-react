import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LayoutFirst from '../components/layout'
import PrivateRoute from './PrivateRoute';
import Test from '../pages/Test';
import Login from '../pages/Login';
import Index from '../pages/Index';
class Routes extends Component {
  componentDidMount(){
    
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route  path="/index" component={Index} />
          <Route  path="/login" component={Login} />
          <Route  path="/test" component={Test} />
          <PrivateRoute exract component={LayoutFirst} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes;