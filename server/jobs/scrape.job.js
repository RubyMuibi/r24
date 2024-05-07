const logger = require("@/utils/logger.util");

const cron = require("node-cron");
const scrape = require("@/helpers/scraper.helper");

function scrapeJob() {
  cron.schedule("0 */6 * * *", async function () {
    try {
      const url = "https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml";
      const category = "technology";
      await scrape(url, category);
    } catch (error) {
      logger.error(`scrapeJob: Error in scraping job - ${error}`);
    }
  });
}

module.exports = scrapeJob;