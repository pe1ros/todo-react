import {ADD_TODO, DELETE_TODO, UPDATE_TODO} from './pageActions'

const initialState = {
  todos: JSON.parse(localStorage.getItem('todos')) || []
}

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
        return {...state, todos: action.payload}
    case DELETE_TODO:
        return {...state, todos: action.payload}
    case UPDATE_TODO:
        return {...state, todos: action.payload}        
  
    default:
      return state;
  }
}