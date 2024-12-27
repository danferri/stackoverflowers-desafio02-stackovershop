import prismaClient from "../database/connection";

class ListPlantTypesService {
    async execute() {
        const plantTypes = await prismaClient.plantType.findMany();
        return plantTypes;
    }
}

export { ListPlantTypesService };
