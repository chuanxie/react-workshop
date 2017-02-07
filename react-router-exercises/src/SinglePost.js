import React, { Component } from 'react'

// EXERCISE: can you update this component so it makes an API request to fetch the post based on the ID?
/*
1. fetch() the post
2. Add it to the state
3. Render it
4. Deal with the case of a post not being found
*/
class SinglePost extends Component {
  render() {
    return (
      <div>
        <p>A single post! ID: {this.props.match.params.id}</p>
      </div>
    )
  }
}

export default SinglePost
