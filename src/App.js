import React, { useState } from 'react';

import LoginForm from './Components/LoginForm';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';

import TodoForm_ from './Components/TodoForm_'
function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if(details.email == adminUser.email && details.password == adminUser.password){
      console.log("Logged in");

      setUser({
        name: details.name,
        email: details.email
      });
    }
      
    else {
      console.log("Details do not match!");
      setError("Details do not match!");
      
    }
  }

  const Logout = () => {
    setUser({name: "", email: ""});
  }

  //Todo Thing
  // const [textInput, setTextInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [open, setOpen] = useState(false)
  return (
    <div className="App">
      {(user.email != "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <div>
          <button style={{marginLeft: "30px"}} onClick={()=>setOpen(true)}>open adding form</button>
          <button style={{marginLeft: "30px"}} onClick={()=>setOpen(false)}>close adding form</button>
          </div>
          <br/>
          {open && <TodoForm_ todos={todos} setTodos={setTodos} Login={Login} error={error} />}
          <br/>
          <TodoList  setTodos={setTodos} todos={todos}/>
<br/><br/><br/><br/>
          <button style={{marginLeft: "140px"}} onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} /
        >
      )}
    </div>
  );
}
export default App;