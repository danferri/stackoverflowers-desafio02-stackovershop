
import Fastify from 'fastify'
import cors from '@fastify/cors'
import { alwaysValidSchema } from 'ajv/dist/compile/util';
import { plantsRoutes } from './routes/plantsRoutes';
import { createPlantTypeRoutes } from './routes/creatPlantTypeRoute';
import { listPlantTypesRoutes } from './routes/listPlantTypesRoutes';



const app = Fastify({logger: true});

const start = async () => {
    
    await app.register(cors);
    await app.register(plantsRoutes);
    await app.register(createPlantTypeRoutes);
    await app.register(listPlantTypesRoutes);

    try{
        await app.listen({port: 5000})
    } catch(err){
        process.exit(1)
    }
}

start();
