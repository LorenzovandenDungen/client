import React from 'react';

const AvailableTrainings = () => {
  const trainings = [
    { id: 1, title: 'Training 1', deadline: '2023-07-01' },
    { id: 2, title: 'Training 2', deadline: '2023-07-15' },
    { id: 3, title: 'Training 3', deadline: '2023-08-01' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Available Trainings</h2>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          {trainings.map((training) => (
            <tr key={training.id}>
              <td>{training.id}</td>
              <td>{training.title}</td>
              <td>{training.deadline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AvailableTrainings;
