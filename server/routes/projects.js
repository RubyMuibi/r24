
const express = require("express");
const router = express.Router();

const { getAllProjects } = require("@controllers/projects")


router.get("/", getAllProjects)

module.exports = router