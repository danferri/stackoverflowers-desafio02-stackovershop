import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { createPlantController } from "../controllers/createPlantController";
import { listPlantsController } from "../controllers/listPlantsController";


export async function plantsRoutes(fastify:FastifyInstance, options: FastifyPluginOptions) {


    fastify.post("/plants", async (request:  FastifyRequest, reply: FastifyReply) => {

        return new createPlantController().handle(request, reply);
    })

    fastify.get("/plantsList", async (request:  FastifyRequest, reply: FastifyReply) => {

        return new listPlantsController().handle(request, reply);
    })
}