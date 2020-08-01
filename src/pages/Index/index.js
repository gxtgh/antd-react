import React from 'react';
import { Row, Col } from 'antd';
import './index.scss';
class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      
    }
  }

  componentDidMount(){
    // console.log(process.env)
  }

  render() {
    return (
      <div className="index-container">
        <header>
          <Row className="index-header">
            <Col span={9} className="index-header-left-block">
              <div className="index-header-block left"></div>
              <div className="index-header-block-arrow left"></div>
            </Col>
            <Col span={6} className="index-header-center">xxx数据大屏</Col>
            <Col span={9} className="index-header-right-block">
              <div className="index-header-block-arrow right"></div>
              <div className="index-header-block right"></div>
            </Col>
          </Row>
        </header>
        <div className="index-content">
          <div className="index-content-top">
          </div> 
          <div className="index-content-bottom">
            <div className="index-content-bottom-left"></div>
            <div className="index-content-bottom-right">
              <div className="index-content-bottom-right-item">1</div>
              <div className="index-content-bottom-right-item">2</div>
              <div className="index-content-bottom-right-item">3</div>
              <div className="index-content-bottom-right-item">4</div>
            </div>
          </div> 
        </div> 
        <footer className="index-footer">
          数据更新时间：2020-07-31 00:00:00
        </footer>
      </div>
    )
  }
}
export default Index;