import React from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './registrationForm';
import LogoutButton from './logoutForm';

const AuthPage = () => {
  const handleLogout = () => {
    // Perform logout logic, clear the authentication token, and update the user's login state
  };

  return (
    <div>
      <h1>Authentication</h1>
      <LoginForm />
      <RegistrationForm />
      <LogoutButton onLogout={handleLogout} />
    </div>
  );
};

export default AuthPage;
