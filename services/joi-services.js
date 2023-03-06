const Joi = require('joi');

const signUpSchema = Joi.object({
    full_name: Joi.string(),
    email:Joi.email(),
    phonenuber:Joi.number().required(),
    password:Joi.string().number(),
    connfirmpassword:Joi.ref('password'),
}).with('password', 'confirmpassword')




const validateSchema = (payload) => {
    return signUpschema.validate(payload, { abortEarly: false })
}

module.exports = validateSchema