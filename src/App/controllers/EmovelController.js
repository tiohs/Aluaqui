import Emovel from '../schemas/Emovel';

class EmovelControllers {
  async store(req, res) {
    const emovel = await Emovel.create({

    });
    res.json(emovel);
  }
  index(req, res) {
    res.json(emovel);
  }
}

export default new EmovelControllers();