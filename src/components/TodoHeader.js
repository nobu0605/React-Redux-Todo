import React from 'react'
import Confirm from './Confirm'

export default function TodoHeader(props) {
  const remaining = props.todos.filter(todo => {
    return !todo.isDone
  })

  return (
    <h1>
      My todos
      <span>
        ({remaining.length}/{props.todos.length})
      </span>
      <Confirm
        isPurge={true}
        todo={props.todo}
        purgeTodo={() => {
          props.purge()
        }}
        name={'Purge'}
      ></Confirm>
    </h1>
  )
}
