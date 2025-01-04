import { FastifyRequest, FastifyReply } from "fastify";
import { GetPlantByIdService } from "../services/getPlantByIdService";

class getPlantByIdController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.params as { id: string };

        const getPlantByIdService = new GetPlantByIdService();

        try {
            const plant = await getPlantByIdService.execute(id);

            if (!plant) {
                reply.status(404).send({ message: "Planta não encontrada." });
                return;
            }

            reply.send(plant);
        } catch (error) {
            reply.status(500).send({ message: "Erro ao buscar a planta." });
        }
    }
}

export { getPlantByIdController };
