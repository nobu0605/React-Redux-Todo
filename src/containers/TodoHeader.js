import TodoHeader from '../components/TodoHeader'
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
    purgeTodo: selectedBoard => {
      dispatch(todoActions.purgeTodo(selectedBoard))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoHeader)
