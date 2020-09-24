const initialState = {
  filter:"SHOW_ALL'"
}

export function filterReducer(state = initialState, action) {
  switch (action.payload) {
    case 'SHOW_ALL':
      return {...state, filter:action.payload}
    case 'SHOW_COMPLETED':
      return {...state, filter:action.payload}
    case 'SHOW_ACTIVE':
      return {...state, filter:action.payload}
    default:
      return state      
  }
}