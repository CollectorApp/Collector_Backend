const { Router } = require('express');
const { postCollection, getCollection, checkStatus } = require('../controllers/collection');

const router = Router();

router.get('/', getCollection);
router.post('/', postCollection);
router.get('/status', (req, res) =>{
    res.send("ok")
});
module.exports = router;