import User from '../models/User';
import * as yup from 'yup';
class UserController {
  async store(req, res) {
    const schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().required().min(6),
      number: yup.string().required().min(9)
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails ' });
    }

    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) return res.status(400).json({ error: 'User exist !' });

    const { name, email, provider, number } = await User.create(req.body);
    return res.json({ name, email, provider, number });
  }

  async update(req, res) {
    const schema = yup.object().shape({
      name: yup.string(),
      email: yup.string().email(),
      oldPassword: yup.string().min(6),
      password: yup
        .string()
        .min(6)
        .when('oldPassword', (oldPassword, field) => {
          oldPassword ? field.required() : field;
        }),
      confirmPassword: yup.string().when('password', (password, field) => {
        password ? field.required().oneOf([yup.ref('password')]) : field;
      }),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails ' });
    }

    const { email, oldPassword } = req.body;
    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });
      if (userExists) {
        return res.status(400).json({ error: 'User already exist !' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match !' });
    }

    const { name, number, provider, avatar_id } = await user.update(req.body);

    return res.json({ name, email, number, provider, avatar_id });
  }
}

export default new UserController();
