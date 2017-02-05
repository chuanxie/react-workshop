import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddTodo from './AddTodo'

class Todos extends Component {
  render() {
    return (
      <div>
        <h4>Todos</h4>
        <ul>
        { this.props.todos.map(todo => (
          <li key={todo.id}>
            <p>{todo.text}</p>
            { todo.done ? 'DONE' : 'Not done!' }
          </li>
        )) }
      </ul>
      <AddTodo />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
  }
}
const Connected = connect(mapStateToProps)(Todos)
export default Connected
