import React from 'react';

const Todo = ({todo, todos, setTodos}) => {

  const completeHandler = (e) => {
    e.preventDefault();
    console.log("complete", todo.name);

    // map each and update when id matches
    setTodos (
      todos.map(currentTodo => {
        if (currentTodo.id === todo.name) {
          currentTodo.completed = !currentTodo.completed;
        }
        return currentTodo;
      })
    )
  }

  const deleteHandler = (e) => {
    e.preventDefault();
    console.log("delete", todo.name);

    // filter
    setTodos(
      todos.filter(currentTodo => currentTodo.name !== todo.name)
    )

  }

  return (
    <li className={todo.completed ? "completed" : ""}>
      <div className="buttons">
      <span style = {{marginRight: "250px"}}>{todo.date}</span>
        {/* <button onClick={completeHandler}>{todo.completed ? "Incomplete" : "Complete"}</button> */}
        <button onClick={deleteHandler}>Done</button>
      </div>
    </li>
  )
}

export default Todo;

