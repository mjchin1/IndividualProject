const { Client } = require("pg");

// const client = new Client(`postgres://localhost:54321/beautifulplaces`);
const client = new Client(`postgres://mchin:MTJyO01UtuFjF3hHS3eZ7BYsOynlMeP0@dpg-cmrgt0ug1b2c73dbbo3g-a/beautifulplaces`);

module.exports = client;
