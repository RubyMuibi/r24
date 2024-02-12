const express = require("express");
const router = express.Router()

const { authUser } = require("@controllers/users")

router.get("/auth", authUser)


module.exports = router