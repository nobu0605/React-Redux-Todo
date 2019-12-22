import TodoItem from '../components/TodoItem'
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
      dispatch(todoActions.checkTodo(todo,selectedBoard))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)
