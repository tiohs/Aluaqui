const user = [];

class UserController {
  index(req, res) {
    res.json(user);
  }
  store(req, res) {
    
  }
}

export default new UserController();