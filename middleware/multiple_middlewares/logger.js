const logger = (req, res, next) => {
    console.log(req.method, req.url, new Date().getDate());
    next();
}

module.exports = logger;