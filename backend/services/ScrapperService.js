const axios = require("axios");
const cheerio = require("cheerio");

const baseURL = "https://www.sciencenews.org";
const httpClient = axios.create({ baseURL });

const clearString = (string) => string.replace(/[\n\t]/g, "");

module.exports = {
  async fetchCategories() {
    const response = await httpClient.get("/");
    const $ = cheerio.load(response.data);
    const categories = [];

    const categoriesElements = $(".dropdown-all-topics__heading___2OsMw");
    const subCategoriesElements = $(".dropdown-all-topics__link___rLNTU");

    const handleEach = (index, element) => {
      categories.push({
        name: clearString($(element).text()),
        url: $(element).attr("href"),
      });
    };

    categoriesElements.each(handleEach);
    subCategoriesElements.each(handleEach);

    return categories;
  },

  async fetchPosts(category) {
    const response = await httpClient.get(`/topic/${category}`);
    const $ = cheerio.load(response.data);
    const posts = [];
    const urlPrefix = `${baseURL}/article`;

    const postsElements = $(`a[href^="${urlPrefix}"]`);

    postsElements.each((index, element) => {
      posts.push({
        title: clearString($(element).text()),
        url: $(element).attr("href"),
      });
    });

    return posts;
  },
};
