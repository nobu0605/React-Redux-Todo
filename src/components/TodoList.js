import React from 'react'
import TodoItem from './TodoItem'
import { Table } from 'semantic-ui-react'

export default function TodoList(props) {
  const todos = props.todos.map(todo => {
    return (
      <TodoItem
        key={todo.id}
        todo={todo}
        checkTodo={props.checkTodo}
        deleteTodo={props.deleteTodo}
      />
    )
  })

  const todosTable = (
    <Table style={{ textAlign: 'center', margin: 20 }} celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Todo</Table.HeaderCell>
          <Table.HeaderCell>Check</Table.HeaderCell>
          <Table.HeaderCell>Delete</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      {todos}
    </Table>
  )

  return <div>{props.todos.length ? todosTable : <li>Nothing to do</li>}</div>
}
