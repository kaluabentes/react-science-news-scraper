const ScraperService = require("../services/ScraperService");

module.exports = {
  async index(req, res) {
    const categories = await ScraperService.fetchCategories();
    res.send(categories);
  },
};
