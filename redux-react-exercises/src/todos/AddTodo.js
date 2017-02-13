import React, { Component } from 'react'
import { connect } from 'react-redux'

// EXERCISE: connect up this component to Redux, so that it can dispatch actions
class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }

    this.onSubmit.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    // TODO: dispatch an action so the new todo is saved
    this.props.dispatch({ type: 'NEW_TODO',
        data: {
          text: this.state.input
        }
    })
  }

  onChange(e) {
    this.setState({
      input: e.target.value,
    })
  }


  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input type="text" onChange={e => this.onChange(e)} value={this.state.input} />
        <input type="submit" value="Add" />
      </form>
    )
  }
}

export default connect()(AddTodo)
