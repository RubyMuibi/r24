const express = require("express");
const router = express.Router();

const { GET, POST } = require("@controllers/articles.controller");

router.get("/", GET);

router.post("/", POST);

module.exports = router;
