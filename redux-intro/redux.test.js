// in this exercise you'll need to get the failing tests passing
// you can run test.only to only run one test
// the first few tests pass and show you the basics of Redux, so pay attention to them :)

import { createStore } from 'redux'

test('a redux store is created with a function', () => {
  const store = createStore(() => {})
  expect(store).toBeDefined()
})

test('the function should return the state of the store', () => {
  const store = createStore(() => 'foo')
  expect(store.getState()).toEqual('foo')
})

test('actions can be dispatched which cause the reducer function to run', () => {
  const reducer = (state, action) => {
    if (!state) state = 0

    if (action.type === 'INCREMENT') {
      return state + 1
    } else {
      return state
    }
  }

  const store = createStore(reducer)
  expect(store.getState()).toEqual(0)
  store.dispatch({ type: 'INCREMENT' })
  expect(store.getState()).toEqual(1)
})

test('we can add a DECREMENT action that reduces the store by 1', () => {
  const reducer = (state, action) => {
    if (!state) state = 0

    if (action.type === 'INCREMENT') {
      return state + 1
    } else {
      return state
    }
  }

  const store = createStore(reducer)
  expect(store.getState()).toEqual(0)
  store.dispatch({ type: 'INCREMENT' })
  expect(store.getState()).toEqual(1)
  // this test is failing, and you should fix it!
  store.dispatch({ type: 'DECREMENT' })
  expect(store.getState()).toEqual(0)
})

test('in case of if-else, we often use case statements:', () => {
  const reducer = (state, action) => {
    if (!state) state = 0

    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      default:
        return state
    }
  }

  const store = createStore(reducer)
  expect(store.getState()).toEqual(0)
  store.dispatch({ type: 'INCREMENT' })
  expect(store.getState()).toEqual(1)
  // this test is failing, and you should fix it!
  store.dispatch({ type: 'DECREMENT' })
  expect(store.getState()).toEqual(0)
})

test('an action can take any data that it needs', () => {
  const reducer = (state, action) => {
    if (!state) state = {}

    switch (action.type) {
      case 'SET_NAME':
        return {
          name: action.data.name
        }
      default:
        return state
    }
  }

  const store = createStore(reducer)
  expect(store.getState()).toEqual({})
  store.dispatch({ type: 'SET_NAME', data: { name: 'Jack' } })
  expect(store.getState()).toEqual({ name: 'Jack' })
})

test('a reducer should never override any other data', () => {
  const reducer = (state, action) => {
    if (!state) state = {}

    switch (action.type) {
      case 'SET_NAME':
        return {
          name: action.data.name
        }
      case 'SET_COLOUR':
        return {
          colour: action.data.colour
        }
      default:
        return state
    }
  }

  const store = createStore(reducer)
  expect(store.getState()).toEqual({})
  store.dispatch({ type: 'SET_NAME', data: { name: 'Jack' } })
  expect(store.getState()).toEqual({ name: 'Jack' })
  store.dispatch({ type: 'SET_COLOUR', data: { colour: 'blue' } })
  expect(store.getState()).toEqual({
    name: 'Jack',
    colour: 'blue',
  })
})


