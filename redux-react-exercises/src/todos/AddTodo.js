import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }

  onSubmit(e) {
    e.preventDefault()
    // TODO: dispatch an action so the new todo is saved
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
