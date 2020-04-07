const ScrapperService = require("../services/ScrapperService");

module.exports = {
  async index(req, res) {
    const { category } = req.body;

    if (!category) {
      return res.status(400).send({
        message: "The category field is required",
      });
    }

    const posts = await ScrapperService.fetchPosts(category);
    res.send(posts);
  },
};
