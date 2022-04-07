const express = require("express");
const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  console.log("home page");
  res.status(200).send("<h1>Home page</h1>");
});

app.get("/about", (req, res) => {
  console.log("about page");
  res.status(200).send("<h1>About page</h1>");
});

// Resource not exist
app.all("*", (req, res) => {
  console.log("resource not exist");
  res.status(404).send("<h1>resource not exist</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
