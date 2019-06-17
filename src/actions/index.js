export function dispatchAddTodo(todo = '') {
  const id = Math.floor(Math.random() * 100)
  return {
    type: 'TODO_ADD',
    todo: { id: id, name: todo, completed: false },
  }
}

export function dispatchToggleTodo(todoId) {
  return {
    type: 'TOGGLE_TODO',
    todo: { id: todoId },
  }
}
