import { FastifyRequest, FastifyReply } from "fastify";
import { ListPlantsServices } from "../services/listPlantServices";


class listPlantsController {

    async handle(request: FastifyRequest, reply : FastifyReply){
        const listPlantsService = new ListPlantsServices();

        const plants = await listPlantsService.execute();

        reply.send(plants);
    }
}

export {listPlantsController}