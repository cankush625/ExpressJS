const express = require("express");
const app = express();

const authorize = require("./authorize");
const logger = require("./logger");

const PORT = process.env.PORT | 5000;

app.use([authorize, logger]);

app.get("/api/v1/", (req, res) => {
    res.status(200).send("Home Page");
    console.log(req.user);
});

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});
