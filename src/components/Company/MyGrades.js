import React from 'react';

const MyGrades = () => {
  // Fetch grades data from API or use dummy data
  const grades = [
    { name: 'John Doe', year: 2021, attempts: 3, score: 85 },
    { name: 'Jane Smith', year: 2022, attempts: 2, score: 92 },
    // Add more data as needed
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>My Grades</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Year</th>
            <th>Attempts</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((grade, index) => (
            <tr key={index}>
              <td>{grade.name}</td>
              <td>{grade.year}</td>
              <td>{grade.attempts}</td>
              <td>{grade.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    maxWidth: '600px',
    margin: '0 auto',
  },
  heading: {
    marginBottom: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
};

export default MyGrades;
