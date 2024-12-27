import { FastifyRequest, FastifyReply } from "fastify";
import { CreatePlantTypeService } from "../services/createPlantTypesService";

class createPlantTypeController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { plantType } = request.body as { plantType: string };

        const plantTypeService = new CreatePlantTypeService();

        const result = await plantTypeService.execute(plantType);

        reply.send(result);
    }
}

export { createPlantTypeController };