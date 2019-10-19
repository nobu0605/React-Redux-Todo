import React from 'react'
import '../App.css'
import TodoHeader from '../containers/TodoHeader'
import TodoList from '../containers/TodoList'
import TodoForm from '../containers/TodoForm'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <TodoHeader />
        <TodoForm />
        <TodoList />
      </div>
    )
  }
}

export default App
