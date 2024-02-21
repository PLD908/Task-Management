import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext';
import LoginPage from './LoginPage';

const Welcome = () => {
    const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <div className='welcome'>
        <h1>Welcome!</h1>
        <p>We are about to put together new training resources about Crypto and Forex Trading, but before we do that , I want to make sure we're covering the topics that are going to be most helpful to YOU...</p>
        <div className="btns">
            <button>Chat Us</button>
            {isAuthenticated ? (
                <button onClick={logout}>Logout</button>
            ) : (
                <LoginPage />
            )}
        </div>
    </div>
  )
}

export default Welcome