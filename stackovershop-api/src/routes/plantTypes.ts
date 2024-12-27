import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { GetPlantTypeController } from "../controllers/plantTypesController";

export async function plantTypesRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {

  fastify.get("/plantTypes", async (request: FastifyRequest, reply: FastifyReply) => {
    return new GetPlantTypeController().handle(request, reply);
  });
}
