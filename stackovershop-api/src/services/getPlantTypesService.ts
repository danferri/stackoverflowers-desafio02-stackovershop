import prismaClient from "../database/connection";

class GetPlantTypeService {
    async execute(): Promise<string[]> {  
        const plantTypes = await prismaClient.plant.findMany({
            distinct: ['plantType']
        });

        return plantTypes.map((plant) => plant.plantType);
    }
}

export { GetPlantTypeService };