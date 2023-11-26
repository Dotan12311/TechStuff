const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const db = require('../utils/database');

// Manually inserted writer data (replace with your actual data)
const writers = [
  { id: 1, username: 'writer1', email: 'writer1@example.com', password: '$2b$10$4Wc7b1Y2we64oW1AIcr4ieF/ywP/I2qfuI5rp0Hq9he5.YpT5m9zi' }, // hashed password
  // Add more writers as needed
];

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  const writer = writers.find((w) => w.email === email);

  if (writer) {
    bcrypt.compare(password, writer.password, (err, passwordMatch) => {
      if (passwordMatch) {
        req.session.userId = writer.id;
        res.json({ success: true, writer });
      } else {
        res.json({ success: false, message: 'Invalid credentials' });
      }
    });
  } else {
    res.json({ success: false, message: 'Writer not found' });
  }
});

module.exports = router;
