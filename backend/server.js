const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const PORT = process.env.PORT || 3333;
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(PORT, () => {
  console.log(`The application is running on http://localhost:${PORT}`);
});
