const pool = require('../config/db');

const ProjectUser = {
  // Add a user to a project
  async create(projectId, userId, name, role) {
    const query = `
      INSERT INTO ProjectUsers (projectId, userId, name, role)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const values = [projectId, userId, name, role];
    const { rows } = await pool.query(query, values);
    return rows[0];
  },

  // Get all users for a project
  async findByProjectId(projectId) {
    const query = 'SELECT * FROM ProjectUsers WHERE projectId = $1;';
    const { rows } = await pool.query(query, [projectId]);
    return rows;
  },

  // Remove a user from a project
  async deleteById(id) {
    const query = 'DELETE FROM ProjectUsers WHERE id = $1 RETURNING *;';
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  },
};

module.exports = ProjectUser;