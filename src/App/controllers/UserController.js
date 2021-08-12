const user = [];

class UserController {
  index(req, res) {
    res.json(user);
  }
  store(req, res) {
    const { email, password, type, name } = req.body;
    user.push(req.body);
    res.json({ name, email, type});
  }
}

export default new UserController();