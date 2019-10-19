import React from 'react'
import Confirm from './Confirm'
import styled from 'styled-components'
import { Table } from 'semantic-ui-react'

export default function TodoItem(props) {
  return (
    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <span className={props.todo.isDone ? 'done' : ''}>
            {props.todo.title}
          </span>
        </Table.Cell>
        <Table.Cell>
          <Input
            type="checkbox"
            checked={props.todo.isDone}
            onChange={() => props.checkTodo(props.todo)}
          />
        </Table.Cell>
        <Table.Cell>
          <Confirm
            isDelete={true}
            todo={props.todo}
            deleteTodo={() => {
              props.deleteTodo()
            }}
            name={'Delete'}
          ></Confirm>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  )
}

const Input = styled.input`
  border: 2px solid palevioletred;
  margin: 0 2em;
  padding: 0.25em 1em;
`
