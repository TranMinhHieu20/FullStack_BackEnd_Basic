const getHomePage = (req, res) => {
    res.send("Hello HomeController!!!");
};
const getABC = (req, res) => {
    //call model
    res.render("sample.ejs");
};

module.exports = { getHomePage, getABC };
