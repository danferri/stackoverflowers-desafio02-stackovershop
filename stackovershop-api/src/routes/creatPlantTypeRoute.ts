import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { createPlantTypeController } from "../controllers/createPlantTypesController";

export async function createPlantTypeRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.post("/plantType", async (request: FastifyRequest, reply: FastifyReply) => {
        return new createPlantTypeController().handle(request, reply);
    });
}
