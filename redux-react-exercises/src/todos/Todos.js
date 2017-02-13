import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddTodo from './AddTodo'
import Todo from './Todo'

class Todos extends Component {
  render() {
    return (
      <div>
        <h4>Todos</h4>
        <ul>
        { this.props.todos.map(todo => (
          <li key={todo.id}>
            <Todo todo={todo}/>
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
