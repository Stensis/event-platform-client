import React, { useState } from "react";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send registration request to the backend with email, password, and confirmPassword
    // Handle the response from the backend
    const postData = async (url, data) => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
    
        if (!response.ok) {
          throw new Error('Request failed');
        }
    
        const responseData = await response.json();
        return responseData;
      } catch (error) {
        console.log('Error:', error);
      }
    }

    let payload = {
      fullname: name,
      username: username,
      email: email,
      tel: tel,
      password: password,
      role: role
    };

    postData('http://127.0.0.1:3000/signup', payload)
    .then((responseData) => {
      console.log('Post created successfully:', responseData);
    })
    .catch((error) => {
      console.log('Error:', error);
    });
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="name">UserName:</label>
        <input
          type="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="name">Phone Number:</label>
        <input
          type="tel"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
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
        <label>Role:</label>
        <input
          type="password"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
