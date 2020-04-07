const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const path = require("path");

const PORT = process.env.PORT || 3333;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(routes);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});
app.listen(PORT, () => {
  console.log(`The application is running on http://localhost:${PORT}`);
});
