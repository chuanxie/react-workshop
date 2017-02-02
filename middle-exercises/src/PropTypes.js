import React, { Component, PropTypes } from 'react'

export default class PropTypesExercise extends Component {
  render() {
    return (
      <div>
        <HelloPerson />
      </div>
    )
  }
}

class HelloPerson extends Component {
  render() {
    return (
      <p>Hello, { this.props.name }</p>
    )
  }
}

HelloPerson.propTypes = {
  // EXERCISE: fill this out with the right propTypes such that we see
  // an error if we forget to pass a name property
}

HelloPerson.defaultProps = {
  // EXERCISE: fill this out so that if we don't pass the name prop, it defaults
  // to "JacK" (or your own name, I'm easy!)
}
