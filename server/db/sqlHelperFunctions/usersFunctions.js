const client = require("../client");
const util = require("util");

// POST - /api/board-games - create a new board game
async function createUser(body) {
  const { firstName, lastName, username, password } = body;
  try {
    const {
      rows: [users],
    } = await client.query(
      `
          INSERT INTO users(first_name, last_name, username, password)
          VALUES($1, $2, $3, $4)
          RETURNING *;
      `,
      [firstName, lastName, username, password]
    );
    console.log("user created!");
    return users;
  } catch (error) {
    console.log("error creating user");
    throw error;
  }
}
//login should be POST

async function getAllUsers() {
  try {
    const { rows } = await client.query(`
          SELECT * FROM users;
      `);
    return rows;
  } catch (err) {
    throw err;
  }
}

async function getUserById(id) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
          SELECT * FROM users
          WHERE user_id = $1;
      `,
      [id]
    );
    return user;
  } catch (error) {
    throw error;
  }
}

async function logUserIn(body) {
  const { username, password } = body;
  try {
    const {
      rows: [user],
    } = await client.query(
      `
          SELECT * FROM users
          WHERE username = $1 AND password = $2;
      `,
      [username, password]
    );
    return user;
  } catch (error) {
    throw error;
  }
}

async function getFavoritePlacesByUserId(id) {
  try {
    const { rows } = await client.query(
      `
          SELECT * FROM places
          INNER JOIN user_favorite_places
          ON user_favorite_places.place_id = places.place_id
          WHERE user_favorite_places.user_id = $1;
      `,
      [id]
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

async function deleteUser(id) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
          DELETE FROM users
          WHERE user_id = $1
          RETURNING *;
      `,
      [id]
    );
    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  logUserIn,
  getFavoritePlacesByUserId,
  deleteUser,
};
