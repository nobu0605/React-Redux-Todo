import React from 'react'
import { Form, Button } from 'semantic-ui-react'

export default function TodoForm(props) {
  return (
    <Form onSubmit={props.addTodo}>
      <Form.Field>
        <label>Add Todo</label>
        <input type="text" value={props.item} onChange={props.updateItem} />
      </Form.Field>
      <Button type="submit">Add</Button>
    </Form>
  )
}
