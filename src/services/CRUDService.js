const connection = require("../config/database");

// select users
const getAllUsers = async () => {
    let [results, fields] = await connection.query(`SELECT * FROM Users`);
    return results;
};

const getUserById = async (req, res) => {
    const UserId = req.params.id;
    let [results, fields] = await connection.query(
        `SELECT * FROM Users WHERE id = ? `,
        [UserId]
    );
    console.log(">>>Results: ", results);
    let user = results && results.length > 0 ? results[0] : {};
    return user;
};

module.exports = {
    getAllUsers,
    getUserById,
};
