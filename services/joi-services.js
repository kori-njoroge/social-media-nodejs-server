const Joi = require('joi');


const signUpSchema = Joi.object({
    full_name: Joi.string()
        .required(),

    userName: Joi.string()
        .min(6).required(),

    email: Joi.email()
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
        .number(),

    connfirmpassword: Joi.ref('password'),
}).with('password', 'confirmpassword')




const validateSchema = (payload) => {
    return signUpschema.validate(payload, { abortEarly: false })
}

module.exports = validateSchema