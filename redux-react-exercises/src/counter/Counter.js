import React, { Component } from 'react'
import { connect } from 'react-redux'

// EXERCISE: connect this Counter to the redux store
// and make it able to show the current state and a button to dispatch
// an action to increment it

class Counter extends Component {
  increment() {
    this.props.dispatch({ type: 'INCREMENT'})
  }

  decrement() {
    this.props.dispatch({ type: 'DECREMENT'})
  }

  reset() {
    this.props.dispatch({ type: 'RESET'})
  }

  render() {
    return (
      <div>
        <p>The current counter value is: { this.props.count}</p>
        <button onClick={e => this.increment()}>INCREMENT</button>
        <button onClick={e => this.decrement()}>DECREMENT</button>
        <button onClick={e => this.reset()}>RESET</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    count: state
  }
}

export default connect(mapStateToProps)(Counter)
