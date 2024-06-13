import React, {useState} from 'react';
import './Login.css'
import {Link} from 'react-router-dom'
import Validation from './LoginValidation'

import email_icon from './Assets/emailimg.png'
import password_icon from './Assets/passwordimg.png'
//import user_icon from './Assets/userimg.png'


const Login = ()=> {
    const [values, setValues] = useState({
        email: '',
        passsword: ''
    })
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev,[event.target.name]: [event.target.value]}))
    }

    const handleSubmit =(event) =>{
        event.preventDefault();
        setErrors(Validation(values));
    }

  return (
      <div className='container'>
        <div className='header'>
            <div className='text'>Welcome back</div>
            <div className ='text1'> Log-in to continue</div>
            <div className='underline'></div>
        </div>
        <form action=''onSubmit={handleSubmit}>
        <div className='inputs'>
            <div className='input'>
                <img src={email_icon} alt=''/>
                <input type='email' placeholder='Email' name='email'
                onChange={handleInput}/>
            </div>
            {errors.email && <span className='text-error'>{errors.email}</span>}
           

            <div className='input'>
                <img src={password_icon} alt=''/>
                <input type='password'placeholder='Password' name='password'
                onChange={handleInput}/>
            </div>
            {errors.password && <span className='text-error'>{errors.password}</span>}
        </div>
        
        <button className='btn-login'>LOGIN</button>
        <Link to='/signup' className='btn-create'>CREATE ACCOUNT</Link>
        </form>
      </div>
  
  )
}

export default Login
