import Imovel from '../schemas/Imovel';

class ImovelControllers {
  async store(req, res) {
    const Imovels = await Imovel.create(req.body);
    Imovel.userId = 
    res.json();
  }
  async index(req, res) {
    const Imovels = await Imovel.find();
    res.json(Imovels);
  }
}

export default new ImovelControllers();