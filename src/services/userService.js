import axios from 'axios';

const baseUrl = 'http://localhost:5000/api/users';  // adjust if your server runs on a different port

const userService = {
  register: async (name, email, password, role) => {
    const response = await axios.post(`${baseUrl}/register`, { name, email, password, role });
    return response.data;
  },
  
  login: async (email, password) => {
    const response = await axios.post(`${baseUrl}/login`, { email, password });
    return response.data;
  },
};

export default userService;
