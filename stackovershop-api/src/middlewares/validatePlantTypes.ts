import { FastifyReply, FastifyRequest } from "fastify";
import * as yup from "yup";
import prismaClient from "../database/connection";
import { ObjectId } from "mongodb";

const plantTypeSchema = yup.object().shape({
    plantTypeId: yup.string().required("Plant type id is required."),
});

export const validatePlantTypes = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        const { labels } = request.body as { labels: { id: string; plantType: string }[] };

        await plantTypeSchema.validate({ labels }, { abortEarly: false });

        const invalidLabels: { id: string; plantType: string }[] = [];
        for (const label of labels) {
            const typeExists = await prismaClient.plantType.findFirst({
                where: { id: label.id },
            });

            if (!typeExists) {
                invalidLabels.push(label);
            }
        }

        if (invalidLabels.length > 0) {
            reply.status(400).send({
                error: "Invalid labels provided.",
                invalidLabels,
            });
            return true;
        }

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