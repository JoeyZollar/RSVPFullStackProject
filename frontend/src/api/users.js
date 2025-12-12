// Base URL for all API calls - change this for deployment
const API_URL = 'http://localhost:3001';

// Get all users
export const getAllUsers = async () => {
  const response = await fetch(`${API_URL}/api/users`);
  if (!response.ok) {
    throw new Error('Failed to fetch users.');
  }
  return response.json();
};

// Create new user
export const createUser = async (userData) => {
  const response = await fetch(`${API_URL}/api/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    throw new Error('Failed to create user.');
  }
  return response.json();
};


// Login user
export const loginUser = async (credentials) => {
  const response = await fetch(`${API_URL}/api/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  if (!response.ok) {
    throw new Error('Failed to login.');
  }
  return response.json();
};

// Get user by id
export const getUserById = async (id) => {
  const response = await fetch(`${API_URL}/api/users/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch user.');
  }
  return response.json();
};
