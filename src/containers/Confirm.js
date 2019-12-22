import Confirm from '../components/Confirm'
import { connect } from 'react-redux'
import { todoActions } from '../actions/todoActions'

const mapStateToProps = state => {
  return {
    boardList: state.boardReducer.boardList,
    boardCount: state.boardReducer.boardCount,
    selectedBoard: state.boardReducer.selectedBoard
  }
}

const mapDispatchToProps = dispatch => {
  return {
    purgeTodo: selectedBoard => {
      dispatch(todoActions.purgeTodo(selectedBoard))
    },
    deleteTodo: (todo, selectedBoard) => {
      dispatch(todoActions.deleteTodo(todo, selectedBoard))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Confirm)
