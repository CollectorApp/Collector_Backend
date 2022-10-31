const { Router } = require('express');
const { getZones } = require('../controllers/zone');

const router = Router();

router.get('/', getZones);

module.exports = router;