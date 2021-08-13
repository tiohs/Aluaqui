import Emovel from '../schemas/Emovel';

class EmovelControllers {
  async store(req, res) {
    const emovel = await Emovel.create(req.body);
    res.json(emovel);
  }
  index(req, res) {
    res.json({ "ok" : "ok"});
  }
}

export default new EmovelControllers();