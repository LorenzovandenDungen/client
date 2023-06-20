import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Invites = () => {
  const [invites, setInvites] = useState([]);
  const [userId, setUserId] = useState("");
  const [trainingId, setTrainingId] = useState("");

  useEffect(() => {
    fetchInvites();
  }, []);

  const fetchInvites = async () => {
    const response = await axios.get('http://localhost:5000/api/invites');
    setInvites(response.data);
  };

  const addInvite = async () => {
    await axios.post('http://localhost:5000/api/invites', {
      userId,
      trainingId,
    });
    fetchInvites();
  };

  return (
    <div>
      <h2>Invites</h2>
      <form onSubmit={addInvite}>
        <input type="text" value={userId} onChange={e => setUserId(e.target.value)} placeholder="User ID" />
        <input type="text" value={trainingId} onChange={e => setTrainingId(e.target.value)} placeholder="Training ID" />
        <button type="submit">Add Invite</button>
      </form>
      {invites.map(invite => (
        <div key={invite.id}>
          <p>User ID: {invite.userId} - Training ID: {invite.trainingId}</p>
        </div>
      ))}
    </div>
  );
};

export default Invites;
