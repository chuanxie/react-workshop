import { createStore } from 'redux'

const reducer = (state, action) => {
  return state
}

const store = createStore(reducer)

// your job is to get all of these tests passing

test('the store is 0 by default', () => {
  expect(store.getState()).toEqual(0)
})

test('I can dispatch INCREMENT to put the store up by one', () => {
  store.dispatch({ type: 'INCREMENT' })
  expect(store.getState()).toEqual(1)
})

test('I can dispatch DECREMENT to put the store down by one', () => {
  store.dispatch({ type: 'DECREMENT' })
  expect(store.getState()).toEqual(-1)
})

test('I can dispatch RESET to put the store down by one', () => {
  store.dispatch({ type: 'DECREMENT' })
  store.dispatch({ type: 'RESET' })
  expect(store.getState()).toEqual(0)
})

test('I can dispatch INCREMENT_BY and a value to increment the store by a number', () => {
  store.dispatch({ type: 'INCREMENT_BY', data: { value: 4 } })
  expect(store.getState()).toEqual(4)
})
