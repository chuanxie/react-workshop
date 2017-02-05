import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './counter/reducer'
import Counter from './counter/Counter'

const store = createStore(reducer)

export default class ReduxApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    )
  }
}

