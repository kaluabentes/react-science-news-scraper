const ScraperService = require("../services/ScraperService");

module.exports = {
  async index(req, res) {
    const { category } = req.query;

    if (!category) {
      return res.status(400).send({
        message: "The category field is required",
      });
    }

    const posts = await ScraperService.fetchPosts(category);
    res.send(posts);
  },
};
