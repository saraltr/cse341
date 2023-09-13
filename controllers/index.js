const tommyFunction = ("/", (req, res, next) => {
    res.json("Hello Tommy!");    
});

module.exports = { tommyFunction };