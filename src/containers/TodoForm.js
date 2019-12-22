import TodoForm from '../components/TodoForm'
import { connect } from 'react-redux'
import { todoActions } from '../actions/todoActions'

const mapStateToProps = state => {
  return {
    item: state.todoReducer.item,
    selectedBoard: state.boardReducer.selectedBoard
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateItem: event => {
      dispatch(todoActions.updateItem(event))
    },
    addTodo: (event,selectedBoard) => {
      dispatch(todoActions.addTodo(event,selectedBoard))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm)
