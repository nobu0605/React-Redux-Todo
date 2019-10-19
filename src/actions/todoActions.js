export const todoActionNames = {
  ADD_TODO: 'ADD_TODO',
  CHECK_TODO: 'CHECK_TODO',
  DELETE_TODO: 'DELETE_TODO',
  UPDATE_ITEM: 'UPDATE_ITEM',
  PURGE: 'PURGE'
}

export const todoActions = {
  addTodo: event => {
    return {
      type: todoActionNames.ADD_TODO,
      payload: {
        event: event
      }
    }
  },
  updateItem: event => {
    return {
      type: todoActionNames.UPDATE_ITEM,
      payload: {
        event: event
      }
    }
  },
  checkTodo: todo => {
    return {
      type: todoActionNames.CHECK_TODO,
      payload: {
        todo: todo
      }
    }
  },
  deleteTodo: todo => {
    return {
      type: todoActionNames.DELETE_TODO,
      payload: {
        todo: todo
      }
    }
  },
  purge: () => {
    return {
      type: todoActionNames.PURGE
    }
  }
}
