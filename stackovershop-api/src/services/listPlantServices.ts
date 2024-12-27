import prismaClient from "../database/connection"

class ListPlantsServices {

    async execute(){
        
        const plants = await prismaClient.plant.findMany();


        return plants;
    }
}


export {ListPlantsServices}