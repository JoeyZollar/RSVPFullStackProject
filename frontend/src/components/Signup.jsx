import { useState } from 'react';
import { createUser } from '../api/users';

const Signup = ({ setPage, setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    const response = await createUser({ username, password });
    if (response._id) {
      setUser(response);
      setPage('dashboard');
    }
  };

  return (
    <div>
      <h2>Create Event Planner Account</h2>

      <input placeholder="username" value={username} onChange={input => setUsername(input.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={input => setPassword(input.target.value)} />
      <button onClick={handleSignup}>Sign Up</button>
      
      <p>
        Already have an account? <button onClick={() => setPage('login')}>Login</button>
      </p>
    </div>
  );
};

export default Signup;
