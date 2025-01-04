import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { createPlantController } from "../controllers/createPlantController";
import { listPlantsController } from "../controllers/listPlantsController";
import { getPlantByIdController } from "../controllers/getPlantByIdController";  
import { validatePlantTypes } from "../middlewares/validatePlantTypes";
import { validatePlant } from "../middlewares/validatePlants";


export async function plantsRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.post("/plants", async (request: FastifyRequest, reply: FastifyReply) => {
        const validationResult = await validatePlant(request, reply);
        if (validationResult) return;

        const plantTypeValidationResult = await validatePlantTypes(request, reply);
        if (plantTypeValidationResult !== null && plantTypeValidationResult !== undefined) return;

        return new createPlantController().handle(request, reply);
    });

    fastify.get("/plantsList", async (request: FastifyRequest, reply: FastifyReply) => {
        return new listPlantsController().handle(request, reply);
    });

    fastify.get("/plants/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new getPlantByIdController().handle(request, reply);
    });
}
