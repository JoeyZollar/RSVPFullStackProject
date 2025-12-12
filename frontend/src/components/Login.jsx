import { useState } from 'react';
import { loginUser } from '../api/users';
import '../LoginSignup.css'

// 
const Login = ({ setPage, setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // function to call when user clicks submit 
  const handleLogin = async () => {
    // Send data to api
    const response = await loginUser({ username, password });

    if (response.user) {
      setUser(response.user);
      setPage('dashboard');
    }
  };

  return (
    <div className='login-screen'>
      <h2>Event Planner Login</h2>
      
      <div className='input-section'>
        <input placeholder='Username' value={username} onChange={input => setUsername(input.target.value)} />
        <input type='password' placeholder='Password' value={password} onChange={input => setPassword(input.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </div>

      <p>
        Don't have an account? <button onClick={() => setPage('signup')}>Sign Up</button>
      </p>
    </div>
  );
};

export default Login;