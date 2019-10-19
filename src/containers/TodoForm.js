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
    updateItem: event => {
      dispatch(todoActions.updateItem(event))
    },
    addTodo: event => {
      dispatch(todoActions.addTodo(event))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm)
