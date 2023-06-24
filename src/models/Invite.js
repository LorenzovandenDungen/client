import React from 'react';

const Invite = ({ invite }) => {
  return (
    <div style={{ padding: '20px', marginBottom: '20px', border: '1px solid #ccc' }}>
      <h3>{invite.name}</h3>
      <p>Email: {invite.email}</p>
      <p>Role: {invite.role}</p>
      <button>Send Invite</button>
    </div>
  );
};

export default Invite;
