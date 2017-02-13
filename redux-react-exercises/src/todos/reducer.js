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
        todos: state.todos.concat([{
          id: state.todos.length + 1,
          done: false,
          text: action.data.text,
        }])
      }

    case 'TOGGLE':
      const id = action.id
      return {
        todos: state.todos.map(todo => {
          if (todo && todo.id === id ) {
            return Object.assign({}, todo, {
              done: !todo.done
            })
          } else {
            return todo
          }
        })
      }

    default:
      return state
  }
}
