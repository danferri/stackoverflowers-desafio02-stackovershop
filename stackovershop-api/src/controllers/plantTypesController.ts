import { FastifyRequest, FastifyReply } from "fastify";
import { GetPlantTypeService } from "../services/getPlantTypesService";


class GetPlantTypeController {

    async handle(request: FastifyRequest, reply: FastifyReply) {
        const getPlantTypeService = new GetPlantTypeService();

        const plantTypes = await getPlantTypeService.execute();
      
        reply.send(plantTypes);
    }
}

export {GetPlantTypeController}