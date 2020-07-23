import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect} from 'react-redux';
import PrivateRoute from './PrivateRoute';


import Routers from './config';
class Routes extends Component {
  componentDidMount(){

  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {
            Routers.map((route, i) => {
              return <Route
                key= { route.key || i}
                path= { route.path }
                exact= { route.exact }
                strict = { route.strict }
                render={(props) => {
                  if(!route.requiresAuth || this.props.token){
                    if(route.routes){
                      return <PrivateRoute key={i}  component={route.component} {...route} />
                    }
                    return <route.component {...props}  component={route.component}/>
                  }
                }}
              />
              // return !route.routes ?
              //   (<Route key={i} path={route.path} exact component={route.component}/>)
              //   :
              //   (<PrivateRoute key={i}  component={()=><Layout child={route.routes}></Layout>} />)
            })
          }
        </Switch>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = state => ({
  token: state.reducers.userInfo && state.reducers.userInfo.token
})

export default connect(mapStateToProps)(Routes);