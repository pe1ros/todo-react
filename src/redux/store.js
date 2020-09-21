import {createStore, applyMiddleware} from 'redux'
import {todoReducer} from './todoReducer'
import logger from 'redux-logger'

export const store = createStore(todoReducer, applyMiddleware(logger))