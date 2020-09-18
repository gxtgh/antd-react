import React from 'react';
import { Breadcrumb} from 'antd';
import { withRouter, Link } from 'react-router-dom';
class layoutBreadcrumb extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      routes:[]
    }
  }
  componentDidMount(){
   this.breadcrumbItems()
  }
  
  breadcrumbItems = () =>{
    const { location } =this.props;
    const pathSnippets = location.pathname.split('/').filter(i => i);
     pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index+1).join('/')}`;
      return this.setState({
        routes:[...this.state.routes,url]
      });
    });
  }

  render() {
    return (
      <div className="layoutBreadcrumb">
        <Breadcrumb>
          <Breadcrumb.Item key="dashboard">
            <Link to="/dashboard">概览</Link>
          </Breadcrumb.Item>
          {
            this.state.routes.map((item) =>{
              return <Breadcrumb.Item key={item}>
                <Link to={item}>1</Link>
              </Breadcrumb.Item>
            })
          }
        </Breadcrumb>
      </div>
    )
  }
}

export default withRouter(layoutBreadcrumb);