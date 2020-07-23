import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends React.Component{
  componentDidMount(){
    // console.log(this.props)
  }
  handerRender = ()=> {
    const {component: ComposedComponent} = this.props;
    return (
      <ComposedComponent {...this.props} />
    )
  }
  render() {
    const {component, ...rest} = this.props;
    return (
      <Route {...rest} render={this.handerRender} />
    )
  }
}
const mapStateToProps = state => ({
  isLogin: state.reducers.userInfo.token?true:false
})
export default connect(mapStateToProps)(PrivateRoute);