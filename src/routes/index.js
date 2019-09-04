const { Router } = require("express");
let router = Router();

const UserController = require("../controller/user");

router.post("/login", UserController.authenticate);

module.exports = router;
