import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:"",
  })

  const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  console.log(inputs)
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form action="">
        <input required type="text" name='username' placeholder='username' onChange={handleChange}/>
        <input required type="email" name='email' placeholder='email' onChange={handleChange}/>
        <input required type="password" name='password' placeholder='password' onChange={handleChange}/>
        <button onClick={handleSubmit}>Register</button>
        <p>This is an error!</p>
        <span>Don't you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  )
}

export default Register