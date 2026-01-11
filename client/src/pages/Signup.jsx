import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


function Signup() {
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()

        //validation
        if(!name || !email || !password){
            alert("Please fill in all fields")
            return;
        }

        const Regex = /^[A-Za-z ]+$/
        if(!Regex.test(name)){
            alert("Name can only contain letters")
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Enter a valid email");
            return;
        }
        
        

        // const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
        // if (!passwordRegex.test(password)) {
        //     alert("Password must contain 8+ chars, 1 number, 1 uppercase");
        //     return;
        // }


        axios.post('http://localhost:3001/',{name,email,password}) 
        .then(result=>{
            console.log(result)
            alert(result.data.message); // display signup successful
            navigate('/login')
        })
        .catch(err=>{
            alert(err.response.data.message)
            console.log(err)
        })

    }

  return (
    <div>
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'>
                            <strong>Name</strong>
                        </label>
                        <input type='text'
                        placeholder='Enter name'
                        autoComplete='off'
                        name='name'
                        className='form-control rounded-0'
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'>
                            <strong>Email</strong>
                        </label>
                        <input type='email'
                        placeholder='Enter Email'
                        autoComplete='off'
                        name='email'
                        className='form-control rounded-0'
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'>
                            <strong>Password</strong>
                        </label>
                        <input type='password'
                        placeholder='Enter Password'
                        autoComplete='off'
                        name='password'
                        className='form-control rounded-0'
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>
                        Register
                    </button>
                </form>
                <p>Already Have an Account</p>
                <Link to='/login' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
{/* 
                <button className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</button> */} 
            </div>

        </div>
    </div>
  )
}

export default Signup