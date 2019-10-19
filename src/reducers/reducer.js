import { combineReducers } from 'redux'
import { todoActionNames } from '../actions/todoActions'
import _ from 'lodash'

const InitState = {
  todos: [],
  item: ''
}

function getUniqueId() {
  return new Date().getTime().toString(36) + '-' + Math.random().toString(36)
}

function todoReducer(state = InitState, action) {
  let _state = _.cloneDeep(state)
  switch (action.type) {
    case todoActionNames.CHECK_TODO:
      const checkTodos = _state.todos.map(todo => {
        return { id: todo.id, title: todo.title, isDone: todo.isDone }
      })

      const checkPos = _state.todos
        .map(todo => {
          return todo.id
        })
        .indexOf(action.payload.todo.id)
      checkTodos[checkPos].isDone = !checkTodos[checkPos].isDone
      _state.todos = checkTodos
      return _state

    case todoActionNames.DELETE_TODO:
      const deleteTodos = _state.todos.slice()
      const deletePos = _state.todos.indexOf(action.payload.todo)
      deleteTodos.splice(deletePos, 1)
      _state.todos = deleteTodos
      return _state

    case todoActionNames.ADD_TODO:
      action.payload.event.preventDefault()
      if (_state.item.trim() === '') {
        return
      }
      const item = {
        id: getUniqueId(),
        title: _state.item,
        isDone: false
      }
      _state.todos.push(item)
      _state.item = ''
      return _state

    case todoActionNames.UPDATE_ITEM:
      _state.item = action.payload.event.target.value
      return _state

    case todoActionNames.PURGE:
      const purgeTodos = _state.todos.filter(todo => {
        return !todo.isDone
      })
      _state.todos = purgeTodos
      return _state

    default:
      return state
  }
}

const reducer = combineReducers({
  todoReducer
})

export default reducer
