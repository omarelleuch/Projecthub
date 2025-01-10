const express = require('express');
const ProjectController = require('../controllers/projectController');

const router = express.Router();

// Create a new project
router.post('/', ProjectController.createProject);

// Get all projects
router.get('/', ProjectController.getAllProjects);

// Get a project by ID
router.get('/:id', ProjectController.getProjectById);

// Update a project
router.put('/:id', ProjectController.updateProject);

// Delete a project
router.delete('/:id', ProjectController.deleteProject);

module.exports = router;