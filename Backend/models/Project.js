const pool = require('../config/db');

const Project = {
  async create(title, description, status, dueDate, progress) {
    const query = `
      INSERT INTO Projects (title, description, status, dueDate, progress)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const values = [title, description, status, dueDate, progress];
    const { rows } = await pool.query(query, values);
    return rows[0];
  },

  async findAll() {
    const { rows } = await pool.query('SELECT * FROM Projects;');
    return rows;
  },

  async findById(id) {
    const { rows } = await pool.query('SELECT * FROM Projects WHERE id = $1;', [id]);
    return rows[0];
  },

  async update(id, title, description, status, dueDate, progress) {
    const query = `
      UPDATE Projects
      SET title = $1, description = $2, status = $3, dueDate = $4, progress = $5
      WHERE id = $6
      RETURNING *;
    `;
    const values = [title, description, status, dueDate, progress, id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  },

  async delete(id) {
    await pool.query('DELETE FROM Projects WHERE id = $1;', [id]);
  },
};

module.exports = Project;