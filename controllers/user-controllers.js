const sql = require('mssql')
const Joi = require('joi')
const bcrypt = require('bcrypt')

const { config } = require('../sql-config')
const createValidator = require('../services/validators');
const validateSchema = require('../services/joi-services');


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
        const { value, error } = validateSchema(req.body)
        // console.log(value || error);
        if (value) {
            try {

                await sql.connect(config);

                const hash = await bcrypt.hash(value.password, 8)
                let result = await sql.query`INSERT INTO users
                (full_name, email , user_name, phone_number, [password], gender, country ) VALUES
                (${value.fullName},${value.email},${value.userName},${value.phoneNumber},${hash}, ${value.gender}, ${value.country} )`
                if (result.rowsAffected.length) res.json({ message: 'User successfully created' })

            } catch (error) {
                console.log(error)
            }
        } else {
            res.json({ message: error })
        }
    },

    userLogin: async (req, res) => {

        const validateLogin = createValidator(loginSchema);

        try {
            const { email, password } = req.body;

            await sql.connect(config);
            const result = await sql.query`SELECT * FROM users WHERE email = ${email}`;

            if (result.recordset.length) {
                const userPass = result.recordset[0].password;
                const bcryptRes = await  bcrypt.compare(password, userPass)
                if (bcryptRes) {
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