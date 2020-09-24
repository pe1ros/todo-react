import {createStore, applyMiddleware,combineReducers} from 'redux'
import {todoReducer} from './todoReducer'
import {filterReducer} from './filterReducer'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  todoReducer,
  filterReducer
})

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(logger) 
));