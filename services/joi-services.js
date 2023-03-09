const Joi = require('joi');



// gender VARCHAR(20) NOT NULL,
// country VARCHAR(234) NOT NULL,
// cover_image NVARCHAR(max) ,
// profile_image NVARCHAR(max) ,
// is_deleted BIT DEFAULT 0

const signUpSchema = Joi.object({
    fullName: Joi.string()
        .required(),

    userName: Joi.string()
        .min(6).required(),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: ['*'] })
        .required(),

    phoneNumber: Joi.number()
        .min(9)
        .required(),

    country: Joi.string()
        .required(),


    gender: Joi.string()
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z1-9]{5,30}'))
        .required(),

    confirmPassword: Joi.ref('password'),
}).with('password', 'confirmPassword')

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

module.exports = { signUpSchema, loginSchema }