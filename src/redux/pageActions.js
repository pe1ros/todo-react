export const ADD_TODO = "ADD_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const UPDATE_TODO = "UPDATE_TODO"
export const TOGGLE_TODO = "TOGGLE_TODO"

export const SET_FILTER = "SET_FILTER"
export const CLEAR_COMPLETED = "CLEAR_COMPLETED"

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

export  function setFilter(filter) { 
  return({
    type: SET_FILTER,
    payload: filter
  })
}

export  function clearCompleted() { 
  return({
    type: CLEAR_COMPLETED,
  })
}