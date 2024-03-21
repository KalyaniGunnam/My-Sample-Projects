import React,{ useState } from 'react'

import '../../commoncss.css'

const  AuthForm = ({ onSubmit,  isRegistering }) => {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      fullName,
      email,
      password,
      confirmPassword,
    };
    onSubmit(formData);
  };

  return (
    <div className="auth-form">
      <form onSubmit={handleSubmit}>
        {
           isRegistering && (
            <input 
              type="text" 
              placeholder="Enter your full name" 
              value={fullName}
              onChange={(e) => setFullName(e.target.value)} 
            />
           )
        }
        

        <input 
          type="email" 
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />

        <input 
          type="password" 
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />

        {
          isRegistering && (
            <input 
              type="password" 
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required 
            />
          )
        }
      </form> 
    </div>
  )
}

export default AuthForm
