import React from 'react';
import { connect } from 'react-redux';
class Dashboard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      userInfo:this.props.userInfo
    }
  }
  componentDidMount(){
    
  }
  render() {
    return (
      <div>doshboard</div>
    )
  }
}
const mapStateToProps = state => ({
  userInfo:state.reducers.userInfo
})
export default connect(mapStateToProps)(Dashboard);