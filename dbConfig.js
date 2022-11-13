// Mongo DB Driver client
const { MongoClient } = require("mongodb");

// dotenv configuration
require('dotenv').config()

//new mongo client
const client = new MongoClient(process.env.DATABASE_LOCAL)

// checking
console.log("database created")

// exporting for future use
module.exports = {client}