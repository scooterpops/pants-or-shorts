const Location = require('../../models/location');

module.exports = {
    create
  };

  async function create(req, res) {
    const Location = await Location.create(req.body);
    try {
        await location.save()
    } catch (err) {
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
  