export const ADD_TODO = "ADD_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const UPDATE_TODO = "UPDATE_TODO"
export const TOGGLE_TODO = "TOGGLE_TODO"

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

export  function updateTodo(data) {
  return({
    type: UPDATE_TODO,
    payload: data
  })
}