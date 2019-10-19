import TodoForm from '../components/TodoForm'
import { connect } from 'react-redux'
import { todoActions } from '../actions/todoActions'

const mapStateToProps = state => {
  return {
    item: state.todoReducer.item
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateItem: todo => {
      dispatch(todoActions.updateItem(todo))
    },
    addTodo: todo => {
      dispatch(todoActions.addTodo(todo))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm)
