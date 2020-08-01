import {createStore, combineReducers} from 'redux';
import reducers from './reducers';

const store = combineReducers({
  reducers
})
//全局就管理一个store
export default createStore(store);