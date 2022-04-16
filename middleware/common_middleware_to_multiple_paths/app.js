const express = require("express");
const app = express();

const PORT = process.env.PORT | 5000;

const logger = (req, res, next) => {
    console.log(req.method, req.url, new Date().getDate());
    // Either terminate the function here or pass it to the next middleware
    // This step is mandatory else the browser will hang up.
    next();
}

let counter = 0;

const count = (req, res, next) => {
    console.log(req.method, req.url, counter++);
    next();
}

// If we want to use same middleware for app of the routes, we can achieve it by
// using app.use() function. We have to pass middleware function to this app.use() function
// and it will apply this middleware to all of the routes declared after the app.use() is
// written

app.use(logger);

app.get("/", (req, res) => {
    return res.status(200).send("Home Page");
});

app.get("/api/v1/about", (req, res) => {
    return res.status(200).send("About Page");
});

// To make the app.use() to apply the middleware function to only specific URL path, we need
// to mention the URL path to which we want to apply the function
app.use("/api/v1/checkout", count);

app.get("/api/v1/items", (req, res) => {
    return res.status(200).send("Items Page");
});

app.get("/api/v1/checkout", (req, res) => {
    return res.status(200).send("Checkout Page");
});

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});
