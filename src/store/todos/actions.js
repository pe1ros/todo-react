import {ADD_TODO, DELETE_TODO, TOGGLE_TODO, UPDATE_TODO, SET_FILTER, CLEAR_COMPLETED} from "../constants"

export  function addTodo(todo) {
  return({
    type: ADD_TODO,
    payload: todo
  })
}

export  function deleteTodo(id) {
  return({
    type: DELETE_TODO,
    payload: id
  })
}

export  function toggleTodo(id) {
  return({
    type: TOGGLE_TODO,
    payload: id
  })
}

export  function editDescTodo(id,text) { 
  return({
    type: UPDATE_TODO,
    payload: id,text
  })
}

export  function clearCompleted() { 
  return({
    type: CLEAR_COMPLETED,
  })
}