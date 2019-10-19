import { combineReducers } from 'redux'
import { todoActionNames } from '../actions/todoActions'
import _ from 'lodash'

const InitState = {
  todos: [],
  item: '111'
}

function todoReducer(state = InitState, action) {
  let _state = _.cloneDeep(state)
  switch (action.type) {
    case todoActionNames.CHECK_TODO:
      const todos = _state.todos.map(todo => {
        return { id: todo.id, title: todo.title, isDone: todo.isDone }
      })

      const pos = _state.todos
        .map(todo => {
          return todo.id
        })
        .indexOf(action.payload.id)

      todos[pos].isDone = !todos[pos].isDone
      this.setState({
        todos: todos
      })
      return

    // case groupActionNames.ADD_GROUP:
    //   _state.groupCount++
    //   let groupItem = {
    //     id: action.payload.groupId,
    //     label: action.payload.data
    //   }
    //   _state.groupList.push(groupItem)
    //   return _state

    // case groupActionNames.SELECT_GROUP:
    //   _state.selectedGroup = action.payload.id
    //   return _state

    // case groupActionNames.EDIT_GROUP:
    //   for (var i = 0; i < _state.groupList.length; i++) {
    //     if (_state.groupList[i].id == action.payload.id) {
    //       _state.groupList[i].label = action.payload.groupName
    //       break
    //     }
    //   }
    //   return _state

    // case groupActionNames.DELETE_GROUP:
    //   for (var i = 0; i < _state.groupList.length; i++) {
    //     if (_state.groupList[i].id == action.payload.id) {
    //       _state.groupList.splice(i, 1)
    //       break
    //     }
    //   }
    //   if (_state.selectedGroup == action.payload.id) {
    //     _state.selectedGroup = _state.groupList[0].id
    //   }
    //   return _state

    default:
      return state
  }
}

const reducer = combineReducers({
  todoReducer
})

export default reducer
