document.addEventListener('DOMContentLoaded', function () {
    const root = document.getElementById('root');
    const writersLoginForm = document.getElementById('writers-login-form');
  
    window.handleWritersLogin = async function () {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      try {
        const response = await api.post('/writers/login', { email, password });
  
        if (response.data.success) {
          alert('Writers Login successful!'); // You can redirect or perform other actions here
        } else {
          alert('Writers Login failed. ' + response.data.message);
        }
      } catch (error) {
        console.error('Writers Login error:', error);
      }
    };
  });
  