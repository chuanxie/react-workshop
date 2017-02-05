export default function(state, action) {
  if (!state) state = 0
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    default:
      return state
  }
}
