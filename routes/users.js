const express = require("express");
const router = express.Router();
const controller = require("../controllers/users/users");
const findUsersController = require("../controllers/users/findUsers");
const createuserController = require("../controllers/users/createUsers");
const loginuserController = require("../controllers/users/loginUser");
const checkAuth = require("../middleware/checkAuth");

/**
 * @swagger
 * /users:
 *   getUsers:
 *     summary: Get data from the API
 *     description: Retrieve data from the API endpoint.
 *     responses:
 *       200:
 *         description: Successful response
 *       404:
 *         description: Not found
 */
router.get("/", controller.getUsers);
router.get("/findUser/:username", checkAuth, findUsersController.findUsers);
router.post("/createUser", createuserController.createUser);
router.post("/login", loginuserController.loginUser);

module.exports = router;
