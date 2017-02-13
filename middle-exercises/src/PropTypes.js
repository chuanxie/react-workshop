import React, { Component, PropTypes } from 'react'

export default class PropTypesExercise extends Component {
  render() {
    return (
      <div>
        <HelloPerson/>
        <OtherHelloPerson/>
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
  name: PropTypes.string.isRequired
  // EXERCISE: fill this out with the right propTypes such that we see
  // an error if we forget to pass a name property
}

HelloPerson.defaultProps = {
  name: 'Jack'
  // EXERCISE: fill this out so that if we don't pass the name prop, it defaults
  // to "JacK" (or your own name, I'm easy!)
}

const OtherHelloPerson = props => (
  <p>OtherHello, { props.name }</p>
)

OtherHelloPerson.propTypes = {
  name: PropTypes.string.isRequired

}

OtherHelloPerson.defaultProps = {
  name: 'chuan x'
}

// EXERCISE: how can we still declare propTypes and default props for functional,
// stateless components?
