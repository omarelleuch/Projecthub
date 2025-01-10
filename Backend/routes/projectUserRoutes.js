const express = require('express');
const {
  addUserToProject,
  getUsersByProjectId,
  removeUserFromProject,
} = require('../controllers/projectUserController'); // Import the controller methods

const router = express.Router();

// Add a user to a project
router.post('/', addUserToProject);

// Get all users for a project
router.get('/:projectId', getUsersByProjectId);

// Remove a user from a project
router.delete('/:id', removeUserFromProject);

module.exports = router;