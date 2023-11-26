// api.js

const BASE_URL = 'http://localhost:3000'; // Replace with your actual backend server URL

const api = {
  async post(url, data) {
    try {
      const response = await fetch(`${BASE_URL}${url}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.error('Error in API request:', error);
      throw error;
    }
  },
  // Add more methods for GET, PUT, DELETE requests as needed
};

// Example usage:
// const response = await api.post('/auth/login', { email: 'example@example.com', password: 'password' });
// console.log(response);