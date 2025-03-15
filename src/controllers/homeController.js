const connection = require("../config/database");
const {
    getAllUsers,
    getUserById,
    updateUserById,
} = require("../services/CRUDService");

const getHomePage = async (req, res) => {
    let results = await getAllUsers();
    // console.log(results.length);
    return res.render("home.ejs", { listUsers: results });
};
const getABC = (req, res) => {
    //call model
    res.render("sample.ejs");
};
//[POST]
const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    console.log(">>> Chuẩn bị thực hiện truy vấn:");

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city)
        VALUES(?, ?, ?)`,
        [email, name, city]
    );
    console.log(">> check results", results);
    res.send("create success");
};
//
const getCreatePage = (req, res) => {
    res.render("create.ejs");
};
//
const getupdatePage = async (req, res) => {
    let user = await getUserById(req, res);
    res.render("edit.ejs", { userEdit: user });
};
// [POST]
const postUpdateUser = async (req, res) => {
    let { email, name, city } = req.body;
    let userId = req.body.userId;
    await updateUserById(email, name, city, userId);
    let [results1, fields1] = await connection.query(
        `SELECT * FROM Users WHERE id = ? `,
        [userId]
    );
    console.log(">>>After Updated Results: ", results1);
    res.redirect("/");
};

module.exports = {
    getHomePage,
    getABC,
    postCreateUser,
    getCreatePage,
    getupdatePage,
    postUpdateUser,
};
