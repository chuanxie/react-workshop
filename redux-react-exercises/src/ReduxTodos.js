import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './todos/reducer'
import Todos from './todos/Todos'

const store = createStore(reducer)

export default class ReduxApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Todos />
      </Provider>
    )
  }
}

