import {TEST_ADD, ADD_USER_INFO, DELETE_USER_INFO} from './actionTypes';
let nextTodoId = 0;
export const addTodo = content => ({
  type: TEST_ADD,
  payload: {
    id: ++nextTodoId,
    content
  }
})

//添加用户信息
export const addUserInfo = content => ({
  type: ADD_USER_INFO,
  payload: {...content}
});

//删除用户信息
export const deleteUserInfo = () => ({
  type: DELETE_USER_INFO,
  payload: {}
})
