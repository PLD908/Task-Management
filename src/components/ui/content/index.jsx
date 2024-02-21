import React, { useContext } from 'react'
import { AuthContext } from '../../../context/authContext'
import LoginPage from '../../../pages/LoginPage';
import Welcome from '../../../pages/Welcome';

const Content = () => {
    const {isAuthenticated} = useContext(AuthContext);

  return (
    <div style={{ textAlign: "center" }}>
        {isAuthenticated ? (
            <Welcome />
        ) : (
            <LoginPage />
        )}
    </div>
  );
};

export default Content