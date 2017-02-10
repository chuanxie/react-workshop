import React, { Component, PropTypes } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  increment() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div>
        <p>Counter: { this.state.counter }</p>
        <button onClick={e => this.increment()}>Incrrement</button>
      </div>
    )
  }
}

export default Counter
