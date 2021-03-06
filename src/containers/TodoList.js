import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import { todoActions } from '../actions/todoActions'

const mapStateToProps = state => {
  return {
    todos: state.todoReducer.todos,
    selectedBoard: state.boardReducer.selectedBoard
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checkTodo: (todo,selectedBoard) => {
      dispatch(todoActions.checkTodo(todo))
    },
    deleteTodo: (todo,selectedBoard) => {
      dispatch(todoActions.deleteTodo(todo,selectedBoard))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
