const express = require("express");
const auth = require("../controllers/authController");
const router = express.Router();
const constroller = require("../controllers/controller");
const constrollerUsers = require("../controllers/controllerUser");
const loginController = require("../controllers/loginController");

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get("/users", constrollerUsers.queryUsers); //ok

//routes auth
router.post("/auth", loginController, auth, constrollerUsers.dashboard); //ok
router.post("/auth/token", constrollerUsers.validateToken); //ok

//routes user
//add user
router.post("/add/user", constrollerUsers.addUser); //ok

//edit user
router.post("/edit/user/:id", constrollerUsers.editUser);

router.delete("/delete/user/:id", constrollerUsers.deleteUser);

//routes project
router.post("/add/ticket", constroller.addTicket); //ok

//edit project
router.post("/edit/ticket/:id", constroller.editTicket);

//delete project
router.delete("/delete/ticket/:id", constroller.deleteTicket); //ok

module.exports = router;
