const express = require("express");
const router = express.Router();

const { authUser, getAUser, patchAuser } = require("@controllers/users");

router.post("/auth", authUser);

router.get("/:userId", getAUser);

router.patch("/:userId", patchAuser);

module.exports = router;
