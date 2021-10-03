import React from 'react';

// import components
import Todo from './Todo.js';

const TodoList = ({todos, setTodos}) => {
    console.log(todos)
  return (
    <ul>
    {
      todos.map(todo => (
        <Todo key={todo.name} todo={todo} todos={todos} setTodos={setTodos} />
      ))
    }
    </ul>
  )
}

export default TodoList;