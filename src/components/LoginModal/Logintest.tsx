import React, { useState, FormEvent } from 'react';
import { useMutation, gql, ApolloError } from '@apollo/client';

// Define the GraphQL mutation
const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user 
        id
      }
    
  }
`;

const LoginTest: React.FC = () => {
  // State for storing user input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Use the useMutation hook to handle the login mutation
  const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION, {
    onCompleted: (data) => {
      // Handle successful login
      const { login } = data;
      console.log("Login successful!");
      console.log("Token:", login.token);
      console.log("User ID:", login.user.id);
      // You may perform additional actions after successful login
    },
    onError: (error) => {
      // Handle login error
      console.error("Login error:", error.message);
    },
  });

  // Function to handle form submission
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Call the login mutation with user input
      await login({
        variables: {
          email,
          password,
        },
      });
    } catch (error) {
      // Apollo Client handles GraphQL errors, so this catch block is for unexpected errors
      const apolloError = error as ApolloError;
      console.error("Unexpected error:", apolloError.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </div>
        {error && (
          <div style={{ color: 'red' }}>
            Error: {error.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default LoginTest;
