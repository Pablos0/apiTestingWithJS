import Joi from "joi";


const bookingDatesSchema = Joi.object({
    checkin:Joi.string().isoDate().required(),
    checkout:Joi.string().isoDate().required()
});

const bookingData = Joi.object({
    firstname:Joi.string().required(),
    lastname:Joi.string().required(),
    totalprice:Joi.number().required(),
    depositpaid:Joi.boolean().required(),
    bookingdates:bookingDatesSchema.required(),
    additionalneeds:Joi.string().optional()
});

const createBookingResponseSchema = Joi.object({
    bookingid:Joi.number().positive().required(),
    booking:bookingData.required()
});

export default { bookingData, createBookingResponseSchema }