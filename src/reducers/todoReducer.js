import { todoActionNames } from '../actions/todoActions'
import { boardActionNames } from '../actions/boardActions'
import _ from 'lodash'

const InitState = {
  todos: {
    board: [
      {
        id: '1',
        isDone: true,
        title: '仕事'
      },
      {
        id: '2',
        isDone: true,
        title: '仕事'
      }
    ]
  },
  item: ''
}

function getUniqueId() {
  return new Date().getTime().toString(36) + '-' + Math.random().toString(36)
}

function todoReducer(state = InitState, action) {
  let _state = _.cloneDeep(state)
  switch (action.type) {
    //CHECK
    case todoActionNames.CHECK_TODO:
      const checkTodos = _state.todos[action.payload.selectedBoard].map(
        todo => {
          return { id: todo.id, title: todo.title, isDone: todo.isDone }
        }
      )

      const checkPos = _state.todos[action.payload.selectedBoard]
        .map(todo => {
          return todo.id
        })
        .indexOf(action.payload.todo.id)
      checkTodos[checkPos].isDone = !checkTodos[checkPos].isDone
      _state.todos[action.payload.selectedBoard] = checkTodos
      return _state

    //DELETE
    case todoActionNames.DELETE_TODO:
      const deleteTodos = _state.todos[action.payload.selectedBoard].slice()
      const deletePos = _state.todos[action.payload.selectedBoard].indexOf(
        action.payload.todo
      )
      deleteTodos.splice(deletePos, 1)

      _state.todos[action.payload.selectedBoard] = deleteTodos
      return _state

    //ADD
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
      _state.todos[action.payload.selectedBoard].push(item)
      _state.item = ''
      return _state

    //UPDATE
    case todoActionNames.UPDATE_ITEM:
      _state.item = action.payload.event.target.value
      return _state

    //PURGE
    case todoActionNames.PURGE_TODO:
      let purgeTodos = _state.todos[action.payload.selectedBoard].filter(
        todo => {
          return !todo.isDone
        }
      )
      _state.todos[action.payload.selectedBoard] = purgeTodos
      return _state

    case boardActionNames.ADD_BOARD:
      _state.todos[action.payload.boardId] = []
      return _state

    default:
      return state
  }
}

export default todoReducer
