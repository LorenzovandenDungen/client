import React from 'react';

const MyGrades = () => {
  const grades = [
    { training: 'Training 1', score: 80, status: 'Approved' },
    { training: 'Training 2', score: 65, status: 'Pending' },
    { training: 'Training 3', score: 90, status: 'Approved' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>My Grades</h2>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Training</th>
            <th>Score</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((grade, index) => (
            <tr key={index}>
              <td>{grade.training}</td>
              <td>{grade.score}</td>
              <td>{grade.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyGrades;
