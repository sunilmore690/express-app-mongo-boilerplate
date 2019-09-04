const { Router } = require("express");

const UserController = require("../controller/user");
const { authenticate } = require("../middlewares/index");
let router = Router();

router.get("/", UserController.index);
router.get("/:id", UserController.show);
router.post("/", UserController.create);

module.exports = router;
