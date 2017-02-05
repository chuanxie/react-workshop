const todos = [
  { id: 1, text: 'Buy Milk', done: false },
  { id: 2, text: 'Walk the dog', done: true },
]

export default (state, action) => {
  if (!state) state = {
    todos,
  }

  switch (action.type) {
    case 'NEW_TODO':
      return {
        todos: this.state.todos.concat([{
          id: this.state.todos.length,
          done: false,
          text: action.data.text,
        }])
      }
    default:
      return state
  }
}
