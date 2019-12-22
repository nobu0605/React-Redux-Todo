export const todoActionNames = {
  ADD_TODO: 'ADD_TODO',
  CHECK_TODO: 'CHECK_TODO',
  DELETE_TODO: 'DELETE_TODO',
  UPDATE_ITEM: 'UPDATE_ITEM',
  PURGE_TODO: 'PURGE_TODO'
}

export const todoActions = {
  addTodo: (event, selectedBoard) => {
    return {
      type: todoActionNames.ADD_TODO,
      payload: {
        event: event,
        selectedBoard: selectedBoard
      }
    }
  },
  updateItem: (event, selectedBoard) => {
    return {
      type: todoActionNames.UPDATE_ITEM,
      payload: {
        event: event,
        selectedBoard: selectedBoard
      }
    }
  },
  checkTodo: (todo, selectedBoard) => {
    return {
      type: todoActionNames.CHECK_TODO,
      payload: {
        todo: todo,
        selectedBoard: selectedBoard
      }
    }
  },
  deleteTodo: (todo, selectedBoard) => {
    return {
      type: todoActionNames.DELETE_TODO,
      payload: {
        todo: todo,
        selectedBoard: selectedBoard
      }
    }
  },
  purgeTodo: selectedBoard => {
    return {
      type: todoActionNames.PURGE_TODO,
      payload: { selectedBoard: selectedBoard }
    }
  }
}
