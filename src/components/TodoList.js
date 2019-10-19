import React from 'react'
import TodoItem from './TodoItem'
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
        {this.props.todos.map(todo => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              checkTodo={this.props.checkTodo}
              deleteTodo={this.props.deleteTodo}
            />
          )
        })}
      </Table>
    )
  }

  render() {
    return (
      <div>
        {this.props.todos.length ? (
          this.renderTodosTable()
        ) : (
          <p style={{ marginTop: 20, fontSize: 15 }}>Nothing to do</p>
        )}
      </div>
    )
  }
}
