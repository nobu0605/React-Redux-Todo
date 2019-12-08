import React from 'react'
import Confirm from './Confirm'
import styled from 'styled-components'

export default function TodoHeader(props) {
  const remaining = props.todos.filter(todo => {
    return todo.isDone
  })

  return (
    <div style={{ marginTop: 30, marginBottom: 20 }}>
      <HeaderTitle>My todos</HeaderTitle>
      <TaskStatus>
        Done {remaining.length} / Total {props.todos.length}
      </TaskStatus>
      <Confirm
        isPurge={true}
        todo={props.todo}
        purgeTodo={() => {
          props.purge()
        }}
        execution={'Purge'}
      ></Confirm>
    </div>
  )
}

const HeaderTitle = styled.span`
  color: black;
  font-size: 30px;
  font-family: tahoma;
`

const TaskStatus = styled.span`
  padding-left: 20px;
  color: black;
  font-size: 20px;
  font-family: tahoma;
`
