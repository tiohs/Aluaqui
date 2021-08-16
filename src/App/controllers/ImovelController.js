import Imovel from '../schemas/Imovel';

class ImovelControllers {
  async store(req, res) {
    const Imovel = await Imovel.create(req.body);
    res.json(Imovel);
  }
  index(req, res) {
    res.json({ "ok" : "ok"});
  }
}

export default new ImovelControllers();