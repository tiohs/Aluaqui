import Imovel from '../schemas/Imovel';

class ImovelControllers {
  async store(req, res) {
    const Imovels = await Imovel.create(req.body);
    res.json(Imovels);
  }
  async index(req, res) {
    const Imovels = await Imovel.find();
    res.json(Imovels);
  }
}

export default new ImovelControllers();