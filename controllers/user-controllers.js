const sql = require('mssql')
const Joi = require('joi')
const { config } = require('../sql-config')
const createValidator = require('../services/validators');


const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

// (user_id, full_name, email , user_name, phone_number, [password], is_deleted , gender, country  )
module.exports = {
    addUser: async (req, res) => {
        const {
            fullName,
            email,
            userName,
            phoneNumber,
            password,
            gender,
            country 
        } = req.body

        try {
            await sql.connect(config);

            let result = await sql.query`INSERT INTO users
            (full_name, email , user_name, phone_number, [password], gender, country ) VALUES
            (${fullName},${email},${userName},${phoneNumber},${password}, ${gender}, ${country} )`
            if (result.rowsAffected.length) res.json({ message: 'User successfully created' })

        } catch (error) {
            console.log(error)
        }
    },

    userLogin: async (req, res) => {

        const validateLogin = createValidator(loginSchema);

        try {
            const { email: validatedEmail, password: validatedPassword } = validateLogin(req.body);

            await sql.connect(config);
            const result = await sql.query`SELECT * FROM users WHERE email = ${validatedEmail}`;

            if (result.recordset.length) {
                const userPass = result.recordset[0].password;
                if (userPass === validatedPassword) {
                    res.json({ message: 'Login successful' });
                } else {
                    res.json({ message: 'Check your credentials' });
                }
            } else {
                res.send({ message: 'User Not Found' });
            }
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                error: "Bad Request",
                message: error.message
            });
        }
    }
}