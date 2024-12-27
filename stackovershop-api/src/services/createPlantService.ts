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
}


class CreatePlantService{
   

    async execute({name,subtitle,labels,price,isInSale,discountPercentage,features,description,imgUrl}: CreatePlantsProps){

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
                imgUrl
            }
        })


        return plants;
    }
}


export {CreatePlantService}