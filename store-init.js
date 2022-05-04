import { createStore } from 'redux'
import { todoListReducer } from './reducers'
export default () => createStore(todoListReducer);