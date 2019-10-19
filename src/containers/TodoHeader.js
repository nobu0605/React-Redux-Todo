import TodoHeader from '../components/TodoHeader'
import { connect } from 'react-redux'
import { todoActions } from '../actions/todoActions'

const mapStateToProps = state => {
  return {
    todos: state.todoReducer.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    purge: () => {
      dispatch(todoActions.purge())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoHeader)
