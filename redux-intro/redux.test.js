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
    switch(action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
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

test('in case of if-else, we often use case statements:', () => {
  const reducer = (state, action) => {
    if (!state) state = 0

    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
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
        state.name = action.data.name
      case 'SET_COLOUR':
        state.colour = action.data.colour
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

describe('multiple reducers',() => {
  const userReducer = (state, action) => {
    if (!state) state = {}
    switch (action.type) {
      case 'LOG_IN':
        return Object.assign({}, state, {
          name: action.data.name,
        })
      case 'LOG_OUT':
        return Object.assign({}, state.name)
      default:
        return state
    }
  }

  const postsReducer = (state, action) => {
    if (!state) state = []

    switch (action.type) {
      case 'NEW_POSTS':
        return state.concat(action.data.posts)
      default:
        return state
    }
  }

  const reducer = (state, action) => {
    if (!state) state = {}

    return {
      user: userReducer(state.user, action),
      posts: postsReducer(state.posts, action),
    }
  }

  const store = createStore(reducer)

  test('you can have one large state object with multiple reducers', () => {
    expect(store.getState()).toEqual({
      user: {},
      posts: []
    })

    store.dispatch({ type: 'NEW_POSTS', data: { posts: ['foo'] } })

    expect(store.getState()).toEqual({
      user: {},
      posts: ['foo']
    })

    store.dispatch({ type: 'LOG_IN', data: { name: 'Jack' } })

    expect(store.getState()).toEqual({
      user: { name: 'Jack' },
      posts: ['foo']
    })
  })

  // you need to edit the code above to get this test to pass!
  test('you can dispatch a LOG_OUT to log out the user', () => {
    store.dispatch({ type: 'LOG_IN', data: { name: 'Jack' } })

    expect(store.getState()).toEqual({
      user: { name: 'Jack' },
      posts: ['foo']
    })

    store.dispatch({ type: 'LOG_OUT' })

    expect(store.getState()).toEqual({
      user: {},
      posts: ['foo']
    })
  })

})
