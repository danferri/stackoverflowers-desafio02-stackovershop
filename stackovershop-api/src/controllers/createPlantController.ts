import { FastifyRequest, FastifyReply } from "fastify";
import { CreatePlantService } from "../services/createPlantService";

class createPlantController {

    async handle(request: FastifyRequest, reply: FastifyReply){

        const {name, subtitle, labels, price, isInSale, discountPercentage, features, description, imgUrl} = request.body as {name: string, subtitle: string, labels: [string], price: number, isInSale: boolean, discountPercentage: number, features: string, description: string, imgUrl:string}
        console.log(name)
        console.log(subtitle)
        console.log(labels)
        console.log(price)
        console.log(isInSale)
        console.log(discountPercentage)
        console.log(features)
        console.log(description)
        console.log(imgUrl)


        const plantService = new CreatePlantService();

        const plant = await plantService.execute({name,subtitle,labels,price,isInSale,discountPercentage,features,description,imgUrl});

        reply.send(plant);
    }   
}

export {createPlantController}