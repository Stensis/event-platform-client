import React from 'react';

const LogoutButton = ({ onLogout }) => {
  const handleLogout = () => {
    // Perform logout logic, clear the authentication token, and update the user's login state
    onLogout();
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
