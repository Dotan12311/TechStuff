const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const authRoutes = require('./routes/auth');
const articlesRoutes = require('./routes/articles');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));

// Database setup (you'll need to implement this)
const db = require('./utils/database');

// Routes
app.use('/auth', authRoutes);
app.use('/articles', articlesRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
