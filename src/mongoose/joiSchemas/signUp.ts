import Joi from "joi";
import joi from "joi";

const signUpJoiSchema = joi
  .object({
    name: Joi.string().required().min(5),
    email: Joi.string()
      .email({
        minDomainSegments: 1,
        tlds: { allow: ["com", "net"] },
      })
      .required(),
    password: Joi.string()
      .min(5)
      .regex(/.*[A-Z].*/)
      .required(),
    friends: Joi.number().default(0),
  })
  .options({ abortEarly: false });

export default signUpJoiSchema;
