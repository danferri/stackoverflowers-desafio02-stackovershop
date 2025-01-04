import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { createPlantController } from "../controllers/createPlantController";
import { listPlantsController } from "../controllers/listPlantsController";
import { getPlantByIdController } from "../controllers/getPlantByIdController";  // Importando o controlador de getPlantById
import { validatePlantTypes } from "../middlewares/validatePlantTypes"; // Corrigir a importação

export async function plantsRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.post("/plants", async (request: FastifyRequest, reply: FastifyReply) => {
        const validationResult = await validatePlantTypes(request, reply);
        if (validationResult) return;

        const plantTypeValidationResult = await validatePlantTypes(request, reply);
        if (plantTypeValidationResult) return;

        return new createPlantController().handle(request, reply);
    });

    fastify.get("/plantsList", async (request: FastifyRequest, reply: FastifyReply) => {
        return new listPlantsController().handle(request, reply);
    });

    fastify.get("/plants/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new getPlantByIdController().handle(request, reply);
    });
}
