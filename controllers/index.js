const greetByName = (name) => (req, res, next) => {
    res.send(`Hello ${name}!`);
};

module.exports = {
    tommyFunction: greetByName("Tommy"),
    ninaFunction: greetByName("Nina"),
    rosaFunction: greetByName("Rosa"),
};
