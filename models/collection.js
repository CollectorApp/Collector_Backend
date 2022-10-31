const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

class Collection extends Model{}

Collection.init({
    id: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    entryDate: {
        type: DataTypes.DATE(6),
        allowNull: false,
        notEmpty: {
            args: true,
            msg: "El campo entryDate es obligatorio"
        }   
    },
    exitDate: {
        type: DataTypes.DATE(6),
        allowNull: true 
    },
}, {
    sequelize,
    modelName: "collection",
    freezeTableName: true,
    timestamps: true
});

module.exports = Collection;