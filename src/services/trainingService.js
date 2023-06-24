// trainingService.js
const API_URL = 'http://localhost:5000/api/trainings';

const trainingService = {
  getAll: async () => {
    const response = await fetch(API_URL);
    return await response.json();
  },

  create: async (training) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(training)
    });
    return await response.json();
  },

  update: async (id, training) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(training)
    });
    return await response.json();
  },

  remove: async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    });
    return await response.json();
  }
};

export default trainingService;
