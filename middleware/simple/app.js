const express = require("express");
const app = express();

const PORT = process.env.PORT | 5000;

// middleware
// middleware is a function that has access to the request, response and next function
// next is a function in the Express router which, when invoked, executes the middleware
// succeeding the current middleware.
const logger = (req, res, next) => {
    console.log(req.method, req.url, new Date().getDate());
    // Either terminate the function here or pass it to the next middleware
    // This step is mandatory else the browser will hang up.
    next();
}

const authorize = (req, res, next) => {
    if (req.query.uname === "ankush") {
        console.log("Authorized");
        // This user data will be available throughout the request
        req.user = {"id": "1", "name": "ankush", "role": "admin"};
        next();
        return;
    }
    return res.status(401).send("Unauthorized");
}

app.get("/", logger, (req, res) => {
    return res.status(200).send("Home Page");
});

app.get("/api/v1/about", logger, (req, res) => {
    return res.status(200).send("About Page");
});

// Multiple middlewares to specific path
// Middlewares execute in the order they are passed to the array
app.get("/api/v1/items", [authorize, logger], (req, res) => {
   return res.status(200).send("Items Page");
});

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});
