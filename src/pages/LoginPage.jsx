import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext';
import Welcome from './Welcome';


const LoginPage = () => {
    const { isAuthenticated, login } = useContext(AuthContext);

    return (
        <div className='login'>
            <h1>Welcome back</h1>
            <p>Don't have an yet? <a href="#">Sign up</a></p>
            <div className="input-box">
                <input type="email" placeholder='Email address' />
                <input type="password" placeholder='Password' />
            </div>
            {isAuthenticated ? (
                <Welcome />
                ) : (
                <button onClick={login}>Login</button>
            )}
        </div>
    )
}

export default LoginPage