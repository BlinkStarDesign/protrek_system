import React, {useState} from 'react'
import './Login.css'
import Validation from './SignupValidation'

import email_icon from './Assets/emailimg.png'
import password_icon from './Assets/passwordimg.png'
import user_icon from './Assets/userimg.png'

const Signup = () => {
  const [values, setValues] = useState({
    name : '',
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
        <div className='text'>ProTrek System</div>
        <div className ='text1'> Elevate Your Projects to New Levels of Success.<br/><span>Create an account</span></div>
        <div className='underline'></div>
    </div>

    <form action=''onSubmit={handleSubmit}>
    <div className='inputs'>
    <div className='input'>
            <img src={user_icon} alt=''/>
            <input type='user-name' placeholder='Username'/>
        </div>

        <div className='input'>
            <img src={email_icon} alt=''/>
            <input type='email' placeholder='Email'/>
        </div>

        <div className='input'>
            <img src={password_icon} alt=''/>
            <input type='password'placeholder='Password'/>
        </div>
    </div>
    
    <button className='btn-login'>SIGNUP </button>
    
    <button className='btn-create'>LOGIN</button>
    </form>
  </div>
  
  )
}

export default Signup
