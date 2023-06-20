import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Trainings = () => {
  const [trainings, setTrainings] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchTrainings();
  }, []);

  const fetchTrainings = async () => {
    const response = await axios.get('http://localhost:5000/api/trainings');
    setTrainings(response.data);
  };

  const addTraining = async () => {
    await axios.post('http://localhost:5000/api/trainings', {
      title,
      content,
    });
    fetchTrainings();
  };

  return (
    <div>
      <h2>Trainings</h2>
      <form onSubmit={addTraining}>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
        <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" />
        <button type="submit">Add Training</button>
      </form>
      {trainings.map(training => (
        <div key={training.id}>
          <h3>{training.title}</h3>
          <p>{training.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Trainings;
