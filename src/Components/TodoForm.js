import React from 'react';

const Form = ({textInput, setTextInput, todos, setTodos}) => {

  const changeHandler = (e) => {
    setTextInput(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (textInput == "") {
      return;
    }

    // Add the item to todo state
    setTodos([...todos, 
              {text: textInput, completed: false, id: Math.random() * 100}
            ]);

    // set todo to empty
    setTextInput("");
  }

  return (
    <form>
      <input onChange={changeHandler} value={textInput} name="todo-text" placeholder="What to do..." />
      <button onClick={submitHandler}>Add</button>
    </form>
  )
}

export default Form;