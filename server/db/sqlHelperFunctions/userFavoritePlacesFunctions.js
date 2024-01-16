const client = require("./client");
const util = require("util");

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
  addFavoritePlace,
  deleteFavoritePlace,
};
