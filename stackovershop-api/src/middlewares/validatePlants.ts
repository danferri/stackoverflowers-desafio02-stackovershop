import { FastifyReply, FastifyRequest } from "fastify";
import * as yup from "yup";
import prismaClient from "../database/connection";

const plantSchema = yup.object().shape({
    name: yup.string().required("The name is required."),
    subtitle: yup.string().required("Subtitle is required."),
    labels: yup
        .array()
        .of(yup.string()).required("Labels are required.")
        .min(1, "Must contain one label at least")
        .required("Label are required"),
    price: yup
        .number()
        .typeError("The price must be a number.")
        .positive()
        .required("The price is required."),

    disccountPercentage: yup
        .number()
        .min(0, "Discount must be at least 0.")
        .max(100, "Discount canot exceed 100.")
        .optional(),
    description: yup.string().required("The description is required."),
});

export const validatePlant = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        await plantSchema.validate(request.body, { abortEarly: false });
        return false;
    } catch (error) {
        if (error instanceof yup.ValidationError) {            
            const errors = error.inner.map((err) => ({
                path: err.path,
                message: err.message,
            }));
            reply.status(400).send({ errors });
            return true;
        }
        reply.status(500).send({ error: "Unexpected error during validation." });
        return true;
    }
};