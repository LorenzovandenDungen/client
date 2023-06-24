import React, { useState } from 'react';

const EmployeeLogin = () => {
  const [inviteCode, setInviteCode] = useState('');
  const [isValidCode, setIsValidCode] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    // Add login logic here
    if (inviteCode === 'validcode123') {
      setIsValidCode(true);
    } else {
      setIsValidCode(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Employee Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={inviteCode}
          onChange={(e) => setInviteCode(e.target.value)}
          placeholder="Invite Code"
          required
          style={{ marginRight: '10px' }}
        />
        <button type="submit">Login</button>
      </form>
      {isValidCode && <p style={{ color: 'green' }}>Valid code! You are logged in.</p>}
      {!isValidCode && inviteCode && <p style={{ color: 'red' }}>Invalid code! Please try again.</p>}
    </div>
  );
};

export default EmployeeLogin;
