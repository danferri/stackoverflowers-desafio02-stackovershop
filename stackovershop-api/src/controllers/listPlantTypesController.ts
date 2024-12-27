import { FastifyRequest, FastifyReply } from "fastify";
import { ListPlantTypesService } from "../services/listPlantTypeServices";

class listPlantTypesController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const listPlantTypesService = new ListPlantTypesService();

        const plantTypes = await listPlantTypesService.execute();

        reply.send(plantTypes);
    }
}

export { listPlantTypesController };