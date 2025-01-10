const Project = require('../models/Project');

exports.createProject = async (req, res) => {
  const { title, description, status, dueDate, progress } = req.body;
  try {
    const project = await Project.create(title, description, status, dueDate, progress);
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getProjectById = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateProject = async (req, res) => {
  const { id } = req.params;
  const { title, description, status, dueDate, progress } = req.body;
  try {
    const project = await Project.update(id, title, description, status, dueDate, progress);
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    await Project.delete(id);
    res.json({ message: 'Project deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};