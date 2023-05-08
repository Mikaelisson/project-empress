const express = require("express");
const router = express.Router();
const constroller = require("../controllers/controller");

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get("/query/tickets", constroller.queryTickets); //ok

module.exports = router;
