import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AddUser() {

  //react router dom useNavigate
  let navigate = useNavigate()

  const [user, setUser]=useState({
    name:"",
    username:"",
    email:""
  })

  //deconstruct useState
  const{name,username,email}=user

  //event change (refer to input variables)
  const onInputChange=(e)=>{
    //the split operator"..." will keep on adding the new object
    setUser({...user,[e.target.name]: e.target.value})
  };

  const onSubmit= async (e)=>{
    e.preventDefault();
    //axios will post the information
    await axios.post("http://localhost:8080/user",user)
    //this will navigate to the homepage when submitted
    navigate("/")
  };

  return (
  <div className='container'>
    <div className='row'>
      <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
        <h2 className='text-center m-4'>Register User</h2>
        <form onSubmit={(e)=>onSubmit(e)}>
          {/* NAME margin bottom 3 */}
          <div className='mb-3'>
            <label htmlFor='Name' className='form-label'>Name</label>
            <input
            type={"text"}
            className='form-control'
            placeholder='Enter your name'
            name="name"
            value={name}
            onChange={(e)=>onInputChange(e)} //called the onInputChange event with arrow function
            />
          </div> 

          {/* USERNAME margin bottom 3 */}
          <div className='mb-3'>
            <label htmlFor='Username' className='form-label'>Username</label>
            <input
            type={"text"}
            className='form-control'
            placeholder='Enter your username'
            name="username"
            value={username}
            onChange={(e)=>onInputChange(e)}
            />
          </div>

          {/* EMAIL margin bottom 3 */}
          <div className='mb-3'>
            <label htmlFor='Email' className='form-label'>Email</label>
            <input
            type={"text"}
            className='form-control'
            placeholder='Enter your email'
            name="email"
            value={email}
            onChange={(e)=>onInputChange(e)}
            />
          </div>

          <button type="submit" className='btn btn-outline-primary'>Submit</button>
          <button type="submit" className='btn btn-outline-danger mx-2'>Cancel</button>
        </form>
      </div>
    </div>
  </div>
  );
}
