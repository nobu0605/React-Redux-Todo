export const todoActionNames = {
  ADD_TODO: 'ADD_TODO',
  CHECK_TODO: 'CHECK_TODO',
  DELETE_TODO: 'DELETE_TODO'
}

export const todoActions = {
  addTodo: (label, selectedGroup) => {
    return {
      type: todoActionNames.ADD_TODO,
      payload: {
        label: label,
        selectedGroup: selectedGroup
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
  }
}
