import TemporaryDrawer from '../components/Drawer'
import { connect } from 'react-redux'
import { boardActions } from '../actions/boardActions'

const mapStateToProps = state => {
  return {
    boardList: state.boardReducer.boardList,
    boardCount: state.boardReducer.boardCount
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSelect: id => {
      dispatch(boardActions.selectBoard(id))
    },
    onAddBoard: (data, boardId) => {
      dispatch(boardActions.addBoard(data, boardId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TemporaryDrawer)
