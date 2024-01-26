const client = require("./client");

const { places, users, userFavoritePlaces } = require("./seedData");

const dropTables = async () => {
  try {
    console.log("Dropping tables...");
    await client.query(`
      DROP TABLE IF EXISTS user_favorite_places;
      DROP TABLE IF EXISTS users;
      DROP TABLE IF EXISTS places;
        

    `);
    console.log("Tables have been dropped.");
  } catch (error) {
    console.log("Error dropping tables: ", error);
  }
};

const createTables = async () => {
  try {
    console.log("building tables...");
    await client.query(`
        CREATE TABLE places (
            place_id SERIAL PRIMARY KEY,
            place_name TEXT,
            address TEXT,
            hours TEXT,
            img_url TEXT,
            description TEXT,
            location_type TEXT,
            neighborhood TEXT,
            website TEXT
        );
       
        CREATE TABLE users (
            user_id SERIAL PRIMARY KEY,
            first_name TEXT, 
            last_name TEXT,
            username varchar(255) UNIQUE NOT NULL,
            password varchar(255) NOT NULL
        );

        CREATE TABLE user_favorite_places (
          favorite_place_id SERIAL PRIMARY KEY,
          user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
          place_id INTEGER REFERENCES places(place_id) ON DELETE CASCADE
        );

    `);
    console.log("tables have been built!");
  } catch (error) {
    console.error(error);
  }
};

const createInitialPlaces = async () => {
  try {
    for (const place of places) {
      await client.query(
        `
                INSERT INTO places(place_name, address, hours, img_url, description, location_type, neighborhood, website)
                VALUES($1, $2, $3, $4, $5, $6, $7, $8);
            `,
        [
          place.placeName,
          place.address,
          place.hours,
          place.imgUrl,
          place.description,
          place.locationType,
          place.neighborhood,
          place.website,
        ]
      );
    }
    console.log("created places!");
  } catch (error) {
    throw error;
  }
};

const createInitialUsers = async () => {
  try {
    for (const user of users) {
      await client.query(
        `
                INSERT INTO users(first_name, last_name, username, password)
                VALUES($1, $2, $3, $4);
            `,
        [user.firstName, user.lastName, user.username, user.password]
      );
    }
    console.log("created users!");
  } catch (error) {
    throw error;
  }
};

const createInitialFavoritePlaces = async () => {
  try {
    for (const favPlace of userFavoritePlaces) {
      await client.query(
        `
                INSERT INTO user_favorite_places(user_id, place_id)
                VALUES($1, $2);
            `,
        [favPlace.userId, favPlace.placeId]
      );
    }
    console.log("created favorite places!");
  } catch (error) {
    throw error;
  }
};

const buildDb = async () => {
  try {
    client.connect();

    await dropTables();
    await createTables();

    await createInitialPlaces();
    await createInitialUsers();
    await createInitialFavoritePlaces();
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
};

buildDb();
