const express = require('express');
const router = express.Router();
const locationCtrl = require('../../controllers/api/location');

// POST route to create a new location
// router.post('/locations', async (req, res) => {
//   try {
//     const { searchTerm } = req.body;
//     const location = await locationCtrl.createLocation(searchTerm);
//     res.json(location);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

router.post('/', locationCtrl.create);

module.exports = router;
