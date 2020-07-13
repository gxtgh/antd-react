import React from 'react';
import Add from './add';
import List from './list';
class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <Add />
        <List />
      </div>
    )
  }
}

export default Test;