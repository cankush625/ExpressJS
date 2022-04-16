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

module.exports = authorize;
