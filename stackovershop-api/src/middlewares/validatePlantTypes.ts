import { FastifyReply, FastifyRequest } from "fastify";
import * as yup from "yup";
import prismaClient from "../database/connection";
import { ObjectId } from "mongodb";

const plantTypeSchema = yup.object().shape({
    plantTypeId: yup.string().required("Plant type id is required."),
});

export const validatePlantTypes = async (request: FastifyRequest, reply: FastifyReply) => {
  
};