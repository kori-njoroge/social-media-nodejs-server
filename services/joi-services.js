const Joi = require('joi');


const signUpSchema = Joi.object({
    full_name: Joi.string()
        .required(),

    userName: Joi.string()
        .min(6).required(),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: ['*'] })
        .required(),

    phonenuber: Joi.number()
        .min(9)
        .max(12)
        .required(),

    country: Joi.string(),

    gender:Joi.string(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z1-9]{5,30}'))
        .required(),

    connfirmpassword: Joi.ref('password'),
}).with('password', 'confirmpassword')

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

module.exports = {signUpSchema, loginSchema}