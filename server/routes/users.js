const express = require("express");
const router = express.Router();

const { authUser, getAUser, patchAUser } = require("@controllers/users");

router.post("/auth", authUser);

router.get("/:userId", getAUser);

router.patch("/:userId", patchAUser);

module.exports = router;
