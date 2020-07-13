import {TEST_ADD, ADD_USER_INFO} from './actionTypes';
let list = sessionStorage.getItem('list')?JSON.parse(sessionStorage.getItem('list')):[];
let userInfo = sessionStorage.getItem('userInfo')?JSON.parse(sessionStorage.getItem('userInfo')):[];
const initilState = {
  list,
  userInfo
}

export default function(state = initilState, action){
  switch (action.type) {
    case TEST_ADD:{
      const {id, content} = action.payload;
      sessionStorage.setItem('list',JSON.stringify([...state.list, {id,content}]))
      return {
        list:[...state.list, {id,content}]
      }
    }
    case ADD_USER_INFO:{
      sessionStorage.setItem('userInfo',JSON.stringify(action.payload));
      return {
        userInfo:{account:action.payload.account}
      }
    }
    default:
      return state
  }
}
