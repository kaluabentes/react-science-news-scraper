const ScrapperService = require("../services/ScrapperService");

module.exports = {
  async index(req, res) {
    const categories = await ScrapperService.fetchCategories();
    res.send(categories);
  },
};
