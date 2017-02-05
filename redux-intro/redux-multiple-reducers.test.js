import { createStore } from 'redux'

const userReducer = (state, action) => {
  if (!state) state = {}
  switch (action.type) {
    case 'LOG_IN':
      return Object.assign({}, state, {
        name: action.data.name,
      })
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

