import React, { Component } from 'react'

export default class Exercise extends Component {
  render() {
    return (
      <div>
        <p>Rendered <code>WrappedComponent</code></p>
        <WrappedComponent a={1} b={2} />
      </div>
    )
  }

}

class MyComponent extends Component {
  render() {
    return (
      <div>
        <p>Got given props:</p>
        <pre><code>{JSON.stringify(this.props, null, 4)}</code></pre>
      </div>
    )
  }
}

const wrapWithSpecialProp = function(CustomComponent) {
  const specialSecretValue = 'foo'
  // EXERCISE: can you rewrite the below class into a function?
  // it's a Rex§act component that only has a render method, and therefore
  // can be turned into a component defined as a function
  return props => (
    <CustomComponent {...props} specialProp={specialSecretValue} />
    // <CustomComponent {...{a: 3}} specialProp={specialSecretValue} />
  )

  // return Fnnn

  // return class SpecialComponent extends Component {
  //   render() {
  //     // EXERCISE: what does {...this.props} do? Remove it and see.
  //     return <CustomComponent {...this.props} specialProp={specialSecretValue} />
  //   }
  // }
}

const WrappedComponent = wrapWithSpecialProp(MyComponent)

