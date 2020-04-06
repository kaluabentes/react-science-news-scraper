const axios = require("axios");
const cheerio = require("cheerio");

const baseURL = "https://www.sciencenews.org";
const httpClient = axios.create({ baseURL });

module.exports = {
  async fetchCategories() {
    const response = await httpClient.get("/");
    const $ = cheerio.load(response.data);
    const categories = [];

    const categoriesElements = $(".dropdown-all-topics__heading___2OsMw");
    const subCategoriesElements = $(".dropdown-all-topics__link___rLNTU");

    const clearString = (string) => string.replace(/[^a-zA-Z]/g, "");

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

  fetchPosts(category) {},
};
