const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

class Zone extends Model{}

Zone.init({
    id: {
        type: DataTypes.TINYINT,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    sector: {
        type: DataTypes.CHAR(1),
        allowNull: false,
        unique: {
            args:true,
            msg: 'La zona ya se encuentra registrada'
        },
        validate: {
            notEmpty: {
                args: true,
                msg: "El campo sector es obligatorio"
            },
            len: {
                args: [1, 1],
                msg: "El campo sector tiene que tener 1 caracter"
            }
        }     
    },
    enabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1
    }
}, {
    sequelize,
    modelName: "zone",
    freezeTableName: true,
    timestamps: false
});

module.exports = Zone;