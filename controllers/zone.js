const { response, request } = require('express');
const Zone = require('../models/zone');

const getZones = async (req = request, res = response) => {
    const { limit = 5, offset = 0 } = req.query;
    const zone = await Zone.findAndCountAll({
        offset: parseInt(offset),
        limit: parseInt(limit),
        order: [['id', 'ASC']],
        where: { enabled: true },
        attributes: { exclude: ['createdAt', 'updatedAt'] },
    });
    res.json(zone);
}

module.exports={
    getZones
}