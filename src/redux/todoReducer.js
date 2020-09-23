import {ADD_TODO, DELETE_TODO, TOGGLE_TODO, UPDATE_TODO} from './pageActions'

const initialState = {
  todos: []//JSON.parse(localStorage.getItem('todos')) || []
}

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
        return { todos: [...state.todos, action.payload]}
    case DELETE_TODO:
        return { todos:[...state.todos.filter(todo => todo.id !== action.payload)]}
    case TOGGLE_TODO:
        return { todos:[...state.todos]}
    case UPDATE_TODO:
        return {...state, todos: action.payload}        
  }
}