import {TEST_ADD, ADD_USER_INFO} from './actionTypes';
let nextTodoId = 0;
export const addTodo = content => ({
  type: TEST_ADD,
  payload: {
    id: ++nextTodoId,
    content
  }
})

export const addUserInfo = content => ({
  type: ADD_USER_INFO,
  payload: {...content}
})
