import { boardActionNames } from '../actions/boardActions'
import _ from 'lodash'

const boardInitState = {
  boardList: [
    {
      id: 'board',
      label: 'ボード'
    }
  ],
  boardCount: 1,
  selectedBoard: 'board'
}

function boardReducer(state = boardInitState, action) {
  let _state = _.cloneDeep(state)
  switch (action.type) {
    case boardActionNames.ADD_BOARD:
      _state.boardCount++
      let boardItem = {
        id: action.payload.boardId,
        label: action.payload.data
      }
      _state.boardList.push(boardItem)
      return _state

    case boardActionNames.SELECT_BOARD:
      _state.selectedBoard = action.payload.id
      return _state

    default:
      return state
  }
}

export default boardReducer
