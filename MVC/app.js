const express = require("express");
const app = express();
const products = require('./router/products');

const PORT = process.env.PORT | 5000;

app.use("/api/v1/products", products);

app.post("/", (req, res) => {
    return res.status(200).send("Login Page");
});

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});
