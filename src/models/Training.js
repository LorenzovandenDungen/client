import React from 'react';

const Training = ({ training }) => {
  return (
    <div style={{ padding: '20px', marginBottom: '20px', border: '1px solid #ccc' }}>
      <h3>{training.title}</h3>
      <p>{training.description}</p>
      <p>Deadline: {training.deadline}</p>
      <button>Start Training</button>
    </div>
  );
};

export default Training;
