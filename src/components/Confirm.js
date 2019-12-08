import React from 'react'
import { confirmAlert } from 'react-confirm-alert' // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import '../confirm.css'
import { Button } from 'semantic-ui-react'

class Confirm extends React.Component {
  deleteTodo(todo) {
    return this.props.deleteTodo(todo)
  }

  purgeTodo(todo) {
    return this.props.purgeTodo(todo)
  }

  submit = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        const { todo, isDelete, isPurge } = this.props

        return (
          <div className="custom-ui">
            <h1>Are you sure?</h1>
            <p>You want to delete this file?</p>
            <button onClick={onClose}>No</button>
            {isDelete && (
              <button
                onClick={() => {
                  this.deleteTodo(todo)
                  onClose()
                }}
              >
                Yes, Delete it!
              </button>
            )}
            {isPurge && (
              <button
                onClick={() => {
                  this.purgeTodo(todo)
                  onClose()
                }}
              >
                Yes, purge it!
              </button>
            )}
          </div>
        )
      }
    })
  }

  render() {
    const { execution } = this.props
    return (
      <div style={{ marginTop: 14 }}>
        {execution === 'Delete' ? (
          <Button primary onClick={this.submit}>
            {execution}
          </Button>
        ) : (
          <Button secondary onClick={this.submit}>
            {execution}
          </Button>
        )}
      </div>
    )
  }
}

export default Confirm
