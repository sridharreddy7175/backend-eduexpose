import Joi from 'joi';

export const userRegistrationSchema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().trim().regex(/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,20}$/).required(),
    phone:Joi.string().trim().required(),
    role:Joi.string().trim().required(),
    password: Joi.string().trim().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])(?!.*\s).{8,}$/).required(),
});

export const loginSchema = Joi.object({
    email: Joi.string().trim().regex(/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,20}$/).required(),
    password: Joi.string().trim().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])(?!.*\s).{8,}$/).required(),
});

export const meetSchema = Joi.object({
    title: Joi.string().required(),
    link: Joi.string().required(),
    meetDate:Joi.string().required()
    
})

export const updateUserRoleSchema = Joi.object({
    userId: Joi.string().required()
})

export const createCourseSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    author: Joi.string().required(),
    price: Joi.string().required(),
    courseimage: Joi.string().required(),
    videos: Joi.string().required()
})
