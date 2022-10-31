const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

class GarbageTruck extends Model{}

GarbageTruck.init({
    id: {
        type: DataTypes.TINYINT,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    licensePlate: {
        type: DataTypes.CHAR(7),
        allowNull: false,
        unique: {
            args:true,
            msg: 'El numero de licencia ya se encuentra registrado'
        },
        validate: {
            notEmpty: {
                args: true,
                msg: "El campo licensePlate es obligatorio"
            },
            len: {
                args: [7, 7],
                msg: "El campo licensePlate tiene que tener 7 caracteres"
            }
        }     
    },
    enabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1
    }
}, {
    sequelize,
    modelName: "garbageTruck",
    freezeTableName: true,
    timestamps: false
});

module.exports = GarbageTruck;