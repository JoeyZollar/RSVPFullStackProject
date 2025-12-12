import { useState, useEffect } from 'react'
import './App.css'
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

function App() {
  // State used to keep track of current page
  const [page, setPage] = useState('login'); // 'login', 'signup', 'dashboard'
  // State used to keep track of current user
  const [user, setUser] = useState(null);

  // If the page state is any of these three values, return a component
  if (page === 'login')
    return <Login setPage={setPage} setUser={setUser} />;

  if (page === 'signup')
    return <Signup setPage={setPage} setUser={setUser} />;

  if (page === 'dashboard')
    return <Dashboard user={user} />;
}

export default App
