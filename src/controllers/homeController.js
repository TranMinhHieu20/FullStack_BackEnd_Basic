const connection = require("../config/database");
const { getAllUsers, getUserById } = require("../services/CRUDService");

const getHomePage = async (req, res) => {
    let results = await getAllUsers();
    // console.log(results.length);
    return res.render("home.ejs", { listUsers: results });
};
const getABC = (req, res) => {
    //call model
    res.render("sample.ejs");
};

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    // let {email, name , city} = req.body;
    // console.log(">>>req.body: ", email, name, city);
    console.log(">>> Chuẩn bị thực hiện truy vấn:");
    // connection.query(
    //     `INSERT INTO Users (email, name, city)
    //     VALUES(?, ?, ?)`,
    //     [email, name, city],
    //     res.send("create success")
    // );
    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city)
        VALUES(?, ?, ?)`,
        [email, name, city]
    );
    console.log(">> check results", results);
    res.send("create success");
    //
    // connection.query(`SELECT * FROM Users`, function (err, result, fields) {
    //     console(">>>result: ", result);
    // });
    // const [results, fields] = await connection.query(`SELECT * FROM Users`);
    // console.log(">>>results", results);
};

const getCreatePage = (req, res) => {
    res.render("create.ejs");
};

const getupdatePage = async (req, res) => {
    let user = await getUserById(req, res);

    res.render("edit.ejs", { user: user });
};

module.exports = {
    getHomePage,
    getABC,
    postCreateUser,
    getCreatePage,
    getupdatePage,
};
