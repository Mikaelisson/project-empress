const express = require("express");
const auth = require("../controllers/authController");
const router = express.Router();
const constroller = require("../controllers/controller");
const constrollerUsers = require("../controllers/controllerUser");
const loginController = require("../controllers/loginController");

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.post("/users", constrollerUsers.queryUsers);

//routes auth
router.post("/auth", loginController, auth, constrollerUsers.dashboard);
router.post("/auth/token", constrollerUsers.validateToken);

//routes user
//add user
router.post("/add/user", constrollerUsers.addUser);

//edit user
router.post("/edit/user/:id", constrollerUsers.editUser);

router.delete("/delete/user/:id", constrollerUsers.deleteUser);

//routes ticket
router.post("/add/ticket", constroller.addTicket);

//edit ticket
router.post("/edit/ticket/:id", constroller.editTicket);

//delete ticket
router.delete("/delete/ticket/:id", constroller.deleteTicket);

module.exports = router;
