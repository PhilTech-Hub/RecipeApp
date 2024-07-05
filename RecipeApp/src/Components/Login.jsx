import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     axios.post('/http://localhost:3001/auth/register', {username, password})
    //         .then(result => {
    //             console.log(result)
    //         }).catch(err => console.log(err))
        
    // }

    axios.defaults.withCredentials = true

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/auth/login', {username, password})
            .then(result => {
                navigate('/')
                console.log(result)
            })
            .catch(err => console.log(err));
    }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 login'>
        <div className='login-wrapper'>
        <div className='p-3  w-100 login-wrapper-scroll'>
            <h3>Login</h3>
            <hr/>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder='Enter Username' className='form-control'
                    onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter Password' className='form-control' 
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button  type='submit' className='btn btn-success w-100 mt-3'>Login</button>
                <p>Don't have an Account? Create one below.</p>
                <Link to='/auth/register'> 
                    <button className='btn btn-outline-success text-white w-100 mt-2.5'>Register</button> 
                </Link>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Login
