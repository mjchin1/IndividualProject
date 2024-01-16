const client = require("../client");
const util = require("util");

async function getAllFavoritePlaces() {
  try {
    const { rows } = await client.query(`
          SELECT * FROM user_favorite_places;
      `);
    return rows;
  } catch (err) {
    throw err;
  }
}

async function getFavoritePlaceById(id) {
  try {
    const {
      rows: [user_favorite_place],
    } = await client.query(
      `
          SELECT * FROM user_favorite_places
          WHERE id = $1;
      `,
      [id]
    );
    return user_favorite_place;
  } catch (error) {
    throw error;
  }
}

async function addFavoritePlace(body) {
  const { userId, placeId } = body;
  try {
    const {
      rows: [place],
    } = await client.query(
      `
          INSERT INTO user_favorite_places(user_id, place_id)
          VALUES($1, $2)
          RETURNING *;
      `,
      [userId, placeId]
    );
    return place;
  } catch (error) {
    throw error;
  }
}

// DELETE - /api/board-games/:id - delete a single board game by id
async function deleteFavoritePlace(id) {
  try {
    const {
      rows: [place],
    } = await client.query(
      `
          DELETE FROM user_favorite_places
          WHERE favorite_place_id = $1
          RETURNING *;
      `,
      [id]
    );
    return place;
  } catch (error) {
    throw error;
  }
}
module.exports = {
  getAllFavoritePlaces,
  getFavoritePlaceById,
  addFavoritePlace,
  deleteFavoritePlace,
};
