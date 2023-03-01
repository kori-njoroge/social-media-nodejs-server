const sql = require('mssql')
const config = require('../sqlconfig')


module.exports = {
    addUser: async (req, res) => {
        const {
            fullName,
            email,
            phonenumber,
            friends,
            password
        } = req.body
        try {
            await sql.connect(config);
            let result = await sql.query`INSERT INTO social.users VALUES(${fullName},${email},${phonenumber},${friends},${password})`
            if (result.rowsAffected.length) res.json({ message: 'User successfully created' })
        } catch (error) {
            console.log(error)
        }
    },

    userLogin: async (req, res) => {
        const {
            phonenumber,
            password
        } = req.body;
        try {
            await sql.connect(config);
            let result = await  sql.query`SELECT * FROM social.users`
        } catch (error) {
            console.log(error)
        }
    }


}