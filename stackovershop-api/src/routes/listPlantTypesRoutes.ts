import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { listPlantTypesController } from "../controllers/listPlantTypesController";

export async function listPlantTypesRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/plantTypes", async (request: FastifyRequest, reply: FastifyReply) => {
        return new listPlantTypesController().handle(request, reply);
    });
}
