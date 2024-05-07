const express = require("express");
const router = express.Router();
const passport = require("@/middlewares/auth.middleware");

const { POST, GET, PATCH } = require("@controllers/users.controller");

router.post("/", passport.authenticate("otp", { session: false }), POST);

router.get("/:userId", GET);

router.patch("/:userId", PATCH);

module.exports = router;
