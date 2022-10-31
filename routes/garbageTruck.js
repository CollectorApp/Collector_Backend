const { Router } = require('express');
const { getGarbageTrucks } = require('../controllers/garbageTruck');

const router = Router();

router.get('/', getGarbageTrucks);
module.exports = router;