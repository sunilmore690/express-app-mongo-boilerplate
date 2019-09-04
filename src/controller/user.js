const { secret = "abcxyz" } = require("config");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user");
const Service = require("../services/index");
const UserService = Service(UserModel);

const create = async (req, res, next) => {
  try {
    let user = await UserService.addData(req.body);
    res.json(user);
  } catch (e) {
    return next(e);
  }
};
const show = () => {};
const index = async (req, res, next) => {
  try {
    let users = await UserService.getData({}, { page: 1, limit: 1 });
    res.json(users);
  } catch (e) {
    return next(e);
  }
};
const authenticate = async (req, res, next) => {
  try {
    let user = await UserService.getOne({
      email: req.body.email,
      password: req.body.password
    });
    if (!user) {
      return next({ status: 421, message: "Email or Password Wrong" });
    }
    var token = jwt.sign(
      { id: user._id, email: user.email, name: user.name },
      secret,
      {
        expiresIn: 86400
      }
    ); // expires in 24 hours
    res.json({ user, token });
  } catch (e) {
    return next(e);
  }
};
module.exports = {
  create,
  show,
  index,
  authenticate
};
