const sql = require('mssql')
const { config } = require('../sqlconfig')


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
            let result = await sql.query`INSERT INTO users VALUES(${fullName},${email},${phonenumber},${friends},${password})`
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
            let result = await sql.query`SELECT * FROM users WHERE phonenumber = ${phonenumber}`
            if (result.recordset.length) {
                console.log("query successful")
                const userPass = await result.recordset[0].password
                if (userPass === password) res.json({ message: 'Login successful' })
                else res.json({ message: 'Check your credentials' });
            } else {
                res.send({ message: 'User Not Found' })
            }
        } catch (error) {
            console.log(error)
        }
    }


}