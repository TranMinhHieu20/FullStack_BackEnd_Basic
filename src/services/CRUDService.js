const connection = require("../config/database");

// select users
const getAllUsers = async () => {
    let [results, fields] = await connection.query(`SELECT * FROM Users`);
    return results;
};
//get users by ID
const getUserById = async (req, res) => {
    const UserId = req.params.id;
    let [results, fields] = await connection.query(
        `SELECT * FROM Users WHERE id = ? `,
        [UserId]
    );
    console.log(">>>Before Results: ", results);
    let user = results && results.length > 0 ? results[0] : {};

    return user;
};

//update user by ID
const updateUserById = async (email, name, city, userId) => {
    let [results, fields] = await connection.query(
        `UPDATE Users
        SET email = ?, name = ?, city = ?
        WHERE id = ?`,
        [email, name, city, userId]
    );
};

module.exports = {
    getAllUsers,
    getUserById,
    updateUserById,
};
