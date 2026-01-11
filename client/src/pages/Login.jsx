import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('')      // initialize as empty string
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!email || !password) {
            return alert("Please fill in all fields")
        }

        try {
            const res = await axios.post('http://localhost:3001/login', { email, password })

            alert(res.data.message)

            // Save user data to localStorage for protected routes
            localStorage.setItem("user", JSON.stringify(res.data.user))

            // Navigate to home
            navigate('/home')

        } catch (err) {
            alert(err.response?.data?.message || "Login failed")
        }
    }

    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input 
                            type='email'
                            placeholder='Enter Email'
                            autoComplete='off'
                            className='form-control rounded-0'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input 
                            type='password'
                            placeholder='Enter Password'
                            autoComplete='off'
                            className='form-control rounded-0'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>
                        Login
                    </button>
                </form>

                <p className='mt-2'>Don't have an Account?</p>
                <Link 
                    to='/' 
                    className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'
                >
                    Sign Up
                </Link>
            </div>
        </div>
    )
}

export default Login
