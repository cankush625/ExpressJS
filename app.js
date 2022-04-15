const express = require("express");
const app = express();

const PORT = process.env.PORT | 5000;

const products = {"items": [{"id": "1", "name": "Mac Pro"}, {"id": "2", "name": "iPhone"}]};

app.get("/", (req, res) => {
  console.log("home page");
  res.status(200).send("<h1>Home page</h1>");
});

app.get("/api/v1/about", (req, res) => {
  console.log("about page");
  res.status(200).send("<h1>About page</h1>");
});

// Query params
app.get("/api/v1/products", (req, res) => {
  const productID = req.query.product_id;
  if (!productID) {
    return res.status(200).json(products);
  }
  const product = products.items.find((product,) => {return product.id === productID});
  if (!product) {
    return res.status(404).send(`Product with ID ${productID} is not found`);
  }
  return res.status(200).json(product);
});

// Route params
app.get("/api/v1/products/:productID", (req, res) => {
  const productID = req.params.productID;
  const product = products.items.find((product,) => {return product.id === productID});
  if (!product) {
    return res.status(404).send(`Product with ID ${productID} is not found`);
  }
  return res.status(200).json(product);
});

// Resource not exist
app.all("*", (req, res) => {
  console.log("resource not exist");
  res.status(404).send("<h1>resource not exist</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
