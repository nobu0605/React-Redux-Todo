import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import { todoActions } from '../actions/todoActions'

const mapStateToProps = state => {
  return {
    todos: state.todoReducer.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checkTodo: todo => {
      dispatch(todoActions.checkTodo(todo))
    },
    deleteTodo: todo => {
      dispatch(todoActions.deleteTodo(todo))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
