import prismaClient from "../database/connection";

class GetPlantByIdService {
    async execute(id: string) {
        // O Prisma já lida com a conversão de ObjectId para string automaticamente
        const plant = await prismaClient.plant.findUnique({
            where: { 
                id: id // Passando diretamente como string
            }
        });

        return plant;
    }
}

export { GetPlantByIdService };
