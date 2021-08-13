const emovel = [];

class EmovelControllers {
  store(req, res) {
    const { idUser, type, descretion } = req.body;
    emovel.push(req.body);
    res.json(emovel);
  }
  index(req, res) {
    res.json(emovel);
  }
}

export default new EmovelControllers();