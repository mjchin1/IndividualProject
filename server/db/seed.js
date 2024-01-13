//pulling in the connection to my local database
const client = require("./client");

const { places, users } = require("./seedData");

//Drop tables for data cleanliness
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

//Create tables for to give data a home <3
const createTables = async () => {
  try {
    console.log("building tables...");
    await client.query(`
        CREATE TABLE places (
            place_id SERIAL PRIMARY KEY,
            place_name TEXT UNIQUE NOT NULL,
            address TEXT UNIQUE NOT NULL,
            hours TEXT NOT NULL,
            img_url TEXT UNIQUE NOT NULL,
            description TEXT NOT NULL,
            location_type TEXT NOT NULL,
            neighborhood TEXT NOT NULL
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
          user_id INTEGER REFERENCES users(user_id) NOT NULL,
          place_id INTEGER REFERENCES places(place_id) NOT NULL
        );
    `);
    console.log("tables have been built!");
  } catch (error) {
    console.error(error);
  }
};

//Populate tables for to have data later :)
//Create types
const createInitialPlaces = async () => {
  try {
    for (const place of places) {
      // console.log(typeName)
      await client.query(
        `
                INSERT INTO places(place_name, address, hours, img_url, description, location_type, neighborhood)
                VALUES($1, $2, $3, $4, $5, $6, $7);
            `,
        [
          place.placeName,
          place.address,
          place.hours,
          place.imgUrl,
          place.description,
          place.locationType,
          place.neighborhood,
        ]
      );
    }
    console.log("created places");
  } catch (error) {
    throw error;
  }
};

// //Create species
// const createInitialSpecies = async () => {
//   try {
//     for (const lilGuy of species) {
//       const {
//         rows: [species],
//       } = await client.query(
//         `
//                 INSERT INTO species(name, "primaryTypeId", "secondaryTypeId")
//                 VALUES($1, $2, $3);
//             `,
//         [
//           lilGuy.name,
//           lilGuy.primaryTypeId,
//           lilGuy.secondaryTypeId ? lilGuy.secondaryTypeId : null,
//         ]
//       );
//     }
//     console.log("created species");
//   } catch (error) {
//     throw error;
//   }
// };

// //INSERT INTO table(column)
// //VALUES(column_data);

// //INSERT INTO users(name)
// //VALUES('Megan');

//Call all my functions to build my database
const buildDb = async () => {
  try {
    //ACTUALLY CONNECT to my local database
    client.connect();

    //Run our functions
    await dropTables();
    await createTables();

    await createInitialPlaces();
    // await createInitialUsers();
  } catch (error) {
    console.error(error);
    //finally will ALWAYS run, whether the catch triggers or not
  } finally {
    //close our connection to my local database
    client.end();
  }
};

buildDb();
