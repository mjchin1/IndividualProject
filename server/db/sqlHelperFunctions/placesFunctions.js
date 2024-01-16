const client = require("../client");
// const util = require("../util");

// GET - /api/board-games - get all board games
async function getAllPlaces() {
  try {
    const { rows } = await client.query(`
          SELECT * FROM places;
      `);
    return rows;
  } catch (err) {
    throw err;
  }
}

// GET - /api/board-games/:id - get a single board game by id
async function getPlaceById(id) {
  try {
    const {
      rows: [place],
    } = await client.query(
      `
          SELECT * FROM places
          WHERE places.place_id = $1;
      `,
      [id]
    );
    return place;
  } catch (error) {
    throw error;
  }
}
// POST - /api/board-games - create a new board game
async function createPlace(body) {
  const {
    placeName,
    address,
    hours,
    imgUrl,
    description,
    locationType,
    neighborhood,
  } = body;
  try {
    const {
      rows: [place],
    } = await client.query(
      `
          INSERT INTO places(place_name, address, hours, img_url, description, location_type, neighborhood)
          VALUES($1, $2, $3, $4, $5, $6, $7)
          RETURNING *;
      `,
      [
        placeName,
        address,
        hours,
        imgUrl,
        description,
        locationType,
        neighborhood,
      ]
    );
    return place;
  } catch (error) {
    throw error;
  }
}

async function deletePlace(id) {
  try {
    const {
      rows: [place],
    } = await client.query(
      `
        DELETE FROM places
        WHERE place_id = $1
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
  getAllPlaces,
  getPlaceById,
  createPlace,
  deletePlace,
};
