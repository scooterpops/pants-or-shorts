const Location = require('../../models/location');

module.exports = {
    create,
    index
  };

  async function create(req, res) {
    try {
        const location = await Location.create(req.body.searchTerm);
        console.log(req.body)
        // await location.save()
        res.json(location)
    }   catch (err) {
        res.status(400).json(err);
    }
  }
  
  async function index(req, res) {
    try {
        const locations = await Location.find({});
        res.json(locations); // Send locations data as JSON response
    }   catch (err) {
        res.status(500).json({ error: 'Error fetching locations' });
    }
  }
  

//   async function create(req, res) {
//     const team = await Team.findById(req.params.id)
//     team.players.push(req.body)
//     try {
//         await team.save()
//     } catch (err) {
//         console.log(err)
//     }
//     res.redirect(`/teams/${team._id}`)
//     team.save()
// }
  