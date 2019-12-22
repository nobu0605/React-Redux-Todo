import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import boardReducer from './boardReducer'

const reducer = combineReducers({
  todoReducer,
  boardReducer
})

export default reducer
