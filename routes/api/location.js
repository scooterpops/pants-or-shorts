const express = require('express');
const router = express.Router();
const locationCtrl = require('../../controllers/api/location');


router.post('/', locationCtrl.create);
router.get('/', locationCtrl.index);


module.exports = router;
