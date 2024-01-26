const client = require("../client");
// const util = require("../util");

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

async function createPlace(body) {
  const {
    placeName,
    address,
    hours,
    imgUrl,
    description,
    locationType,
    neighborhood,
    website,
  } = body;
  try {
    const {
      rows: [place],
    } = await client.query(
      `
          INSERT INTO places(place_name, address, hours, img_url, description, location_type, neighborhood, website)
          VALUES($1, $2, $3, $4, $5, $6, $7, $8)
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
        website,
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
