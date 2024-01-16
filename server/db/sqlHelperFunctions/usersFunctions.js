const client = require("./client");
const util = require("util");

// POST - /api/board-games - create a new board game
async function createUser(body) {
  const { firstName, lastName, username, password } = body;
  try {
    const {
      rows: [place],
    } = await client.query(
      `
          INSERT INTO users(first_name, last_name, username, password)
          VALUES($1, $2, $3, $4)
          RETURNING *;
      `,
      [firstName, lastName, username, password]
    );
    return place;
  } catch (error) {
    throw error;
  }
}
//login should be POST

async function getUserById(id) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
          SELECT * FROM users
          WHERE id = $1;
      `,
      [id]
    );
    return place;
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
          WHERE username = $1 AND password = $2
          RETURNING *;
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
    const {
      rows: [place],
    } = await client.query(
      `
          SELECT * FROM places
          INNER JOIN user_favorite_places
          ON user_favorite_places.place_id = places.place_id
          WHERE user_favorite_places.user_id = $1;
      `,
      [id]
    );
    return place;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createUser,
  getUserById,
  logUserIn,
  getFavoritePlacesByUserId,
};
