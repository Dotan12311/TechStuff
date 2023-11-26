const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

// Simulated writer data (replace with actual database operations)
const writers = [
  { id: 1, username: 'writer1', email: 'writer1@example.com', passwordHash: 'password' }, // hashed password
  // Add more writers as needed
];

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const writer = writers.find((w) => w.email === email);

  if (writer) {
    try {
      const passwordMatch = await bcrypt.compare(password, writer.passwordHash);

      if (passwordMatch) {
        req.session.userId = writer.id;
        res.json({ success: true, writer: { id: writer.id, username: writer.username, email: writer.email } });
      } else {
        res.json({ success: false, message: 'Invalid credentials' });
      }
    } catch (error) {
      console.error('Bcrypt error:', error);
      res.json({ success: false, message: 'Internal server error' });
    }
  } else {
    res.json({ success: false, message: 'Writer not found' });
  }
});

module.exports = router;
