const connection = require('../database/connections')

module.exports = {
  async create(req, res){
    const {id} = req.body;
    const ong = await connection('ongs').where('id', id).select('name').first();

    if (!ong){
      res.status(404).json({"Error":"Not found ONG with this ID"});
    }
    res.json(ong.name);
  }
}