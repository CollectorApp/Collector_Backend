const { response, request } = require('express');
const Collection = require('../models/collection');
const GarbageTruck = require('../models/garbageTruck');
const Zone = require('../models/zone');

const getCollection = async (req = request, res = response) => {
    const { limit = 5, offset = 0 } = req.query;
    const collection  = await Collection.findAndCountAll({
        offset: parseInt(offset),
        limit: parseInt(limit),
        order: [['entryDate', 'ASC']],
        attributes: { exclude: ['createdAt', 'updatedAt', 'garbageTruckId', 'zoneId'] },
        include: [{
            model: GarbageTruck, attributes: { exclude: ['enabled']  }},{ 
            model: Zone, attributes: { exclude: ['enabled'] }
        }]
    });
    res.json(collection);
}

const postCollection= async(req, res = response) => {
    const { licensePlate, sector, ...etc } = req.body;

    try {
        const garbageTruck = await GarbageTruck.findOne(({where: {licensePlate} }));
        if (!garbageTruck) throw new Error('La placa no está registrada en la db');

        const zone = await Zone.findOne(({where: {sector} }));
        if (!zone) throw new Error('La zona no está registrada en la db');  

        garbageTruck.setZones([zone.id], { through: { ...etc } })
                    .then(data => { res.status(201).json({msg:`Recoleccion registrada exitosamente`})})
                    .catch(err => res.json(err));
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: `${error}`} );
    }
}

module.exports={
    getCollection,
    postCollection
}