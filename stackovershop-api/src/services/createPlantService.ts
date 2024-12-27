import prismaClient from "../database/connection"

interface CreatePlantsProps{
    name:             string
    subtitle :        string
    labels :          string[] 
    price  :          number    
    isInSale  :       boolean
    discountPercentage: number   
    features :        string
    description   :   string
    imgUrl       :    string
    plantType   :     string
}


class CreatePlantService{
   

    async execute({name,subtitle,labels,price,isInSale,discountPercentage,features,description,imgUrl,plantType}: CreatePlantsProps){

        if(!name || !subtitle){
            throw new Error("Prencha todos os campos");
        }

        const plants = await prismaClient.plant.create({
            data: {
                name,
                subtitle,
                labels,
                price,
                isInSale,
                discountPercentage,
                features,
                description,
                imgUrl,
                plantType
            }
        })


        return plants;
    }
}


export {CreatePlantService}