import React from 'react'
import TodoItem from '../containers//TodoItem'
import { Table } from 'semantic-ui-react'

export default class TodoList extends React.Component {
  renderTodosTable() {
    return (
      <Table style={{ textAlign: 'center', marginTop: 20 }} celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Todo</Table.HeaderCell>
            <Table.HeaderCell>Done</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {this.props.todos[this.props.selectedBoard].map(todo => {
          return <TodoItem key={todo.id} todo={todo} />
        })}
      </Table>
    )
  }

  render() {
    return (
      <div>
        {this.props.todos[this.props.selectedBoard] ? (
          this.renderTodosTable()
        ) : (
          <p style={{ marginTop: 20, fontSize: 15 }}>Nothing to do</p>
        )}
      </div>
    )
  }
}
