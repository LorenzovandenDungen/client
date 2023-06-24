import React, { useState } from 'react';

const Config = () => {
  const [sendEmail, setSendEmail] = useState(false);

  const handleCheckboxChange = () => {
    setSendEmail(!sendEmail);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Configuration</h2>
      <div style={styles.checkboxContainer}>
        <label style={styles.label}>
          <input
            type="checkbox"
            checked={sendEmail}
            onChange={handleCheckboxChange}
            style={styles.checkbox}
          />
          Automatically send email for low scores
        </label>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    maxWidth: '400px',
    margin: '0 auto',
  },
  heading: {
    marginBottom: '20px',
  },
  checkboxContainer: {
    marginTop: '10px',
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  checkbox: {
    marginRight: '5px',
  },
};

export default Config;
