import prismaClient from "../database/connection";

class CreatePlantTypeService {
    async execute(plantType: string) {
        if (!plantType) {
            throw new Error("O campo plantType é obrigatório.");
        }

        const existingPlantType = await prismaClient.plantType.findFirst({
            where: { plantType }
        });

        if (existingPlantType) {
            return existingPlantType;
        }

        const newPlantType = await prismaClient.plantType.create({
            data: { plantType }
        });

        return newPlantType;
    }
}

export { CreatePlantTypeService };
