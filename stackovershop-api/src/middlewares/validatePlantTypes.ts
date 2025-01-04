import { FastifyReply, FastifyRequest } from "fastify";
import * as yup from "yup";
import prismaClient from "../database/connection";
import { ObjectId } from "mongodb";

const plantTypeSchema = yup.object().shape({
  plantType: yup
    .string()
    .required("Plant type is required.")
    .min(3, "Plant type must have at least 3 characters."),
});

export const validatePlantTypes = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {    
    await plantTypeSchema.validate(request.body, { abortEarly: false });

    const { plantType } = request.body as { plantType: string };

    const plantTypeExists = await prismaClient.plantType.findFirst({
      where: { plantType },
    });

    if (!plantTypeExists) {
      return reply
        .status(404)
        .send({ error: "Plant type does not exist in the database." });
    }
   
    return reply.status(200).send({ message: "Plant type is valid." });
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      
      return reply.status(400).send({
        error: "Validation Error",
        details: error.errors,
      });
    }
    
    return reply.status(500).send({
      error: "Internal Server Error",
      details: (error as any).message,
    });
  }
};
