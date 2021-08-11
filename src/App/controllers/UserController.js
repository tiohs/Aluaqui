const user = [];

class UserController {
  index(req, res) {
    res.json(user);
  }
  store(req, res) {
    const { email, password, type } = req.body;
    console.log(email)
  }
}

export default new UserController();