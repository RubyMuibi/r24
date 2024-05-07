require("module-alias/register");
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const logger = require("@/utils/logger.util");
const scrapeJob = require("@/jobs/scrape.job");

//users routes
const usersRoutes = require("@/routes/users.route");
//articles routes
const articlesRoutes = require("@/routes/articles.route");

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT;
const dbUri = process.env.MONGODB_URI;

const startServer = async () => {
  try {
    await mongoose.connect(dbUri);
    logger.info("Connected to database");
    scrapeJob();

    app.use("/api/articles", articlesRoutes);
    app.use("/api/users", usersRoutes);

    app.listen(port, () => {
      logger.info(`Server running at http://localhost:${port}`);
    });
  } catch (error) {
    logger.error(`Failed to connect to database ${error}`);
  }
};

startServer();
