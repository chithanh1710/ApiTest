const express = require("express");
const userControllers = require("../controllers/userControllers");
const router = express.Router();

router.param("id", userControllers.checkID);

router
  .route("/")
  .get(userControllers.getAllUser)
  .post(userControllers.createUser);
router
  .route("/:id")
  .get(userControllers.getUser)
  .patch(userControllers.updateUser)
  .delete(userControllers.deleteUser);

module.exports = router;
