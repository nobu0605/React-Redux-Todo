export const boardActionNames = {
  ADD_BOARD: 'ADD_BOARD',
  SELECT_BOARD: 'SELECT_BOARD',
  DELETE_BOARD: 'DELETE_BOARD',
  UPDATE_BOARD: 'UPDATE_BOARD'
}

export const boardActions = {
  addBoard: (data, boardId) => {
    return {
      type: boardActionNames.ADD_BOARD,
      payload: {
        data: data,
        boardId: boardId
      }
    }
  },
  selectBoard: id => {
    return {
      type: boardActionNames.SELECT_BOARD,
      payload: {
        id: id
      }
    }
  }
}
