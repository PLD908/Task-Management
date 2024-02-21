import React from 'react'
import Navbar  from './components/ui/navbar';
import Content from './components/ui/content';
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Content />
    </AuthProvider>
  );
}

export default App;
