const express = require('express');
const projectRoutes = require('./routes/projectRoutes');
const projectUserRoutes = require('./routes/projectUserRoutes');

const app = express();
const cors = require('cors');
app.use(cors());
// Middleware
app.use(express.json());

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/project-users', projectUserRoutes);

module.exports = app;