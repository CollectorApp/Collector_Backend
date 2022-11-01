const { Sequelize } = require('sequelize');

const db = new Sequelize("collectordb", "bryan","123456789", {
    host: "collectordb.cudqjgytmrbj.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
    timezone: "-05:00"
} );
module.exports = db;