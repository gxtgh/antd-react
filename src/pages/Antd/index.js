import React,{ Component}  from 'react';
import { Card, Button, Tooltip, Radio } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './index.scss';
class Antd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      size: 'large',
    }
  }
  handleSizeButton = e => {
    this.setState({size: e.target.value})
  }
  render(){
    const {size } = this.state;
    return(
      <div className="antd-container">
        <h1>antd演示</h1>  
        <Card title="Button">
          <Button type="primary">主按钮</Button>  
          <Button >次按钮</Button>
          <Button type="dashed">虚线按钮</Button>
          <Button type="text">文本按钮</Button>
          <Button type="link">链接按钮</Button>
          <Tooltip title="search">
            <Button type="primary" shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button type="primary" shape="circle">A</Button>  
          <Button type="primary" icon={<SearchOutlined />}>Search</Button>
          <Button shape="circle" icon={<SearchOutlined/>}></Button>
          <Radio.Group value={size} onChange={this.handleSizeButton} className="ml-20">
            <Radio.Button value="large">Large</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="small">Small</Radio.Button>
          </Radio.Group>
          <Button size={size} type="primary" className="ml-20">Primary</Button>
        </Card>  
      </div>
    )
  }
}

export default Antd;