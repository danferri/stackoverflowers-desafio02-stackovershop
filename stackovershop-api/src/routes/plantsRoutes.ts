import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { createPlantController } from "../controllers/createPlantController";
import { listPlantsController } from "../controllers/listPlantsController";
import { validatePlant } from "../middlewares/validatePlants";


export async function plantsRoutes(fastify:FastifyInstance, options: FastifyPluginOptions) {


    fastify.post("/plants", async (request:  FastifyRequest, reply: FastifyReply) => {
        const validationResult = await validatePlant(request, reply);
        if(validationResult) return;
        
        return new createPlantController().handle(request, reply);
    })

    fastify.get("/plantsList", async (request:  FastifyRequest, reply: FastifyReply) => {

        return new listPlantsController().handle(request, reply);
    })
}