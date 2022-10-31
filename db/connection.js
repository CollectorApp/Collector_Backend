const { Sequelize } = require('sequelize');

const db = new Sequelize("collectordb", "root","3621", {
    host: "localhost",
    dialect: "mysql",
    timezone: "-05:00"
} );
module.exports = db;