const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const authRoutes = require('./routes/auth');
const writersAuthRoutes = require('./routes/writers-auth');
const articlesRoutes = require('./routes/articles');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));

// Serve static files from the 'public' folder
app.use(express.static('frontend/public'));

// Database setup (you'll need to implement this)
const db = require('./utils/database');

// Routes
app.use('/auth', authRoutes);
app.use('/writers', writersAuthRoutes);
app.use('/articles', articlesRoutes);

// Default route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to Your Tech News!');
});

app.listen(port, () => console.log(`Server running on port ${port}`));
