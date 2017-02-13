import React, { Component } from 'react'
import { connect } from 'react-redux'

// EXERCISE: connect up this component to Redux, so that it can dispatch actions
class Todo extends Component {
  constructor(props) {
    super(props)

    this.toggle.bind(this)
  }

  toggle() {

    this.props.dispatch({
      type: 'TOGGLE',
      id: this.props.todo.id
    })
  }

  render() {
    return (
      <div>
        <p>{this.props.todo.text}</p>
        { this.props.todo.done ? 'DONE' : 'Not done!' }
        <button onClick={e=> this.toggle()}>Toggle</button>
      </div>
    )
  }
}

export default connect()(Todo)
