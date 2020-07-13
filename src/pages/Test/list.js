import React from 'react';
import { connect } from 'react-redux';

// const data = (data) =>{
//   console.log(data)
// }

// const List = ({ list }) =>(
//   <div>
//     1
//     {list}
//   </div>
// )
class List extends React.Component{
  // constructor(props){
  //   super(props);
  // }

  render(){
    return (
    <ul>
      {
        this.props.list.map(item =>{
          return(<li key={item.id}>{item.content}</li>)
        })
      }
    </ul>
    )
  }
}

const mapStateToProps = state => ({
  list: state.reducers.list
})


export default connect(mapStateToProps)(List);