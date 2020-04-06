const express = require("express");
const routes = require("./routes");

const PORT = process.env.PORT || 3333;
const app = express();
app.use(express.json());
app.use(routes);
app.listen(PORT, () => {
  console.log(`The application is running on http://localhost:${PORT}`);
});
