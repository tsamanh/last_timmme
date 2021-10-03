import React, {useState}from 'react';


function LoginForm({ Login, error, setTodos, todos }) {
  const[details, setDetails] = useState({name: "", email: "", password: ""});
  
  const submitHandler = e => {
    e.preventDefault();
    const newtodo = {
        name: details.name, 
        date: details.email, 
        course: details.password,
        completed: false
    }
    setTodos([...todos, newtodo ])

  }

// name 
// date 
// course 
  return (
    <form onSubmit = {submitHandler}>
      <div className="form-inner">
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" onChange = {e => setDetails({...details,name:e.target.value})} value = {details.name}/>
        </div>
        <div className="form-group">
          <label htmlFor="">Date: </label>
          <input type="text" name="date" id="date" onChange = {e => setDetails({...details,email:e.target.value})} value = {details.email} />
        </div>
        <div className="form-group">
          <label htmlFor="">Course: </label>
          <input type="text" name="course" id="course" onChange = {e => setDetails({...details,password:e.target.value})} value = {details.password} />
        </div>
        <input type="submit" value="ADD" />
      </div>
      


    </form>
  )
}

export default LoginForm;