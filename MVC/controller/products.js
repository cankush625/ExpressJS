const getProduct = (req, res) => {
    return res.status(200).send("Products Page");
};

const addToCart = (req, res) => {
    return res.status(200).send("Cart Page");
};

const buyProduct = (req, res) => {
    return res.status(200).send("Checkout Page");
}

module.exports = {getProduct, addToCart, buyProduct};
