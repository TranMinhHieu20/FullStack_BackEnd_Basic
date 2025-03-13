const connection = require("../config/database");

const getHomePage = (req, res) => {
    return res.render("home.ejs");
};
const getABC = (req, res) => {
    //call model
    res.render("sample.ejs");
};

const postCreateUser = (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    // let {email, name , city} = req.body;
    console.log(">>>req.body: ", email, name, city);
    res.send("123");
    console.log(">>>Database connection:", connection);
    // connection.execute(
    //     `INSERT INTO Users (email, name, city)
    //     VALUES(?, ?, ?)`,
    //     [email, name, city],
    //     function (err, results) {
    //         // connection.release();
    //         if (err) {
    //             console.log(">>> err: ", err);
    //             res.status(500).send("Loi them user!!");
    //         } else {
    //             console.log(">>> results: ", results);
    //             res.send("create users success!!");
    //         }
    //     }
    // );
};

module.exports = { getHomePage, getABC, postCreateUser };
