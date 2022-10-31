const { response, request } = require('express');
const GarbageTruck = require('../models/garbageTruck');

const getGarbageTrucks = async (req = request, res = response) => {
    const { limit = 5, offset = 0 } = req.query;
    const garbageTruck = await GarbageTruck.findAndCountAll({
        offset: parseInt(offset),
        limit: parseInt(limit),
        order: [['id', 'ASC']],
        where: { enabled: true },
        attributes: { exclude: ['createdAt', 'updatedAt'] },
    });
    res.json(garbageTruck);
}

module.exports={
    getGarbageTrucks,
}