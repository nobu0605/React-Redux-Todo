import React from 'react'
import Confirm from './Confirm'
import styled from 'styled-components'
import TemporaryDrawer from '../containers/Drawer'

export default function TodoHeader(props) {
  const remaining = props.todos[props.selectedBoard]
    ? props.todos[props.selectedBoard].filter(todo => {
        return todo.isDone
      })
    : 0
  const DoneRemaining = remaining ? remaining.length : 0
  const TatalRemaining = props.todos[props.selectedBoard]
    ? props.todos[props.selectedBoard].length
    : 0

  return (
    <div
      style={{
        marginTop: 30,
        marginBottom: 20
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <HeaderTitle>My todos</HeaderTitle>
        <TaskStatus>
          Done {DoneRemaining} / Total {TatalRemaining}
        </TaskStatus>
        <TemporaryDrawer />
      </div>
      <Confirm
        isPurge={true}
        todo={props.todo}
        purgeTodo={() => {
          props.purgeTodo(props.selectedBoard)
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
