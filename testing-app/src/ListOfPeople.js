import React, { Component, PropTypes } from 'react'

class ListOfPeople extends Component {
  renderPeople() {
    return this.props.people.map(person => (
      <li key={person.id}>
        <div style={{color: person.colour}}>
          <p>Name: { person.name }</p>
        </div>
      </li>
    ))
  }

  render() {
    return (
      <div>
        <h2>List of Jack's Friends</h2>
        <ul>{ this.renderPeople() }</ul>
      </div>
    )
  }
}
ListOfPeople.propTypes = {
  people: PropTypes.array.isRequired,
}

export default ListOfPeople
