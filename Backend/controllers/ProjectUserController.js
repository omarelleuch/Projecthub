const ProjectUser = require('../models/ProjectUser');

// Add a user to a project
const addUserToProject = async (req, res) => {
  const { projectId, userId, name, role } = req.body;

  try {
    const projectUser = await ProjectUser.create(projectId, userId, name, role);
    res.status(201).json(projectUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get all users for a project
const getUsersByProjectId = async (req, res) => {
  const { projectId } = req.params;

  try {
    const users = await ProjectUser.findByProjectId(projectId);
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Remove a user from a project
const removeUserFromProject = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await ProjectUser.deleteById(id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User removed from project', user: deletedUser });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Export the controller methods
module.exports = {
  addUserToProject,
  getUsersByProjectId,
  removeUserFromProject,
};