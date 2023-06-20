// userService.js
const API_URL = 'http://localhost:5000/api/users';

const userService = {
  getAll: async () => {
    const response = await fetch(API_URL);
    return await response.json();
  },

  create: async (user) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    });
    return await response.json();
  },

  update: async (id, user) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
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

export default userService;
