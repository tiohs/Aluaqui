import Imovel from '../schemas/Imovel';

class ImovelControllers {
  async store(req, res) {
    const idUser = req.userId;
    const Imovels = await Imovel.create({ idUser,...req.body});
    res.json(Imovels);
  }
  async index(req, res) {
    const Imovels = await Imovel.find();
    res.json(Imovels);
  }
}

export default new ImovelControllers();