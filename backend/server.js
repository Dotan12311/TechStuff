const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const authRoutes = require('./routes/auth');
const writersAuthRoutes = require('./routes/writers-auth'); // Add a new route file for writers
const articlesRoutes = require('./routes/articles');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));

// Database setup (you'll need to implement this)
const db = require('./utils/database');

// Routes
app.use('/auth', authRoutes);
app.use('/writers', writersAuthRoutes); // Use a different route for writers login
app.use('/articles', articlesRoutes);

// Default route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to Your Tech News!'); // You can customize this message
});

app.listen(port, () => console.log(`Server running on port ${port}`));
