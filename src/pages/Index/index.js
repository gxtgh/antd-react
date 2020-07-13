import React from 'react';
// import { connect } from "react-redux";
// import { addTodo } from '../../store/actions'
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      input:""
    }
  }

  updateInput = input => {
    this.setState({input});
  }

  handelAddTodo = () => {
    // this.props.addTodo(this.state.input)
    this.setState({ input: "" });
  }

  render() {
    return (
      <div>
        <input onChange={e => this.updateInput(e.target.value)} value={this.state.input} />
        <button className="" onClick={this.handelAddTodo}>addTodo</button>
      </div>
    )
  }
}
export default Index
// export default connect(
//   null,
//   // { addTodo }
// )(Index);