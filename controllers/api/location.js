const Location = require('../../models/location');

module.exports = {
    create
  };

  async function create(req, res) {
    // const Location = await Location.create(searchTerm);
    try {
        const location = await Location.create(req.body.searchTerm);
        console.log(req.body)
        // await location.save()
        res.json(location)
    }   catch (err) {
        res.status(400).json(err);
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
  