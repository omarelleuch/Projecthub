const pool = require('../config/db');

const User = {
  async create(fullName, email, password) {
    const query = `
      INSERT INTO users (full_name, email, password)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const values = [fullName, email, password];
    const { rows } = await pool.query(query, values);
    return rows[0];
  },

  

  // Find a user by email
  async findByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = $1;';
    const { rows } = await pool.query(query, [email]);
    return rows[0];
  },

  // Delete a user by ID
  async deleteById(id) {
    const query = 'DELETE FROM users WHERE id = $1 RETURNING *;';
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  },

  // Get all users (for admin purposes)
  async findAll() {
    const query = 'SELECT * FROM users;';
    const { rows } = await pool.query(query);
    return rows;
  },
};

module.exports = User;