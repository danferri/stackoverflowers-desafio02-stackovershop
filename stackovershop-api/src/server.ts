
import Fastify from 'fastify'
import cors from '@fastify/cors'
import { alwaysValidSchema } from 'ajv/dist/compile/util';
import { plantsRoutes } from './routes/plantsRoutes';



const app = Fastify({logger: true});

const start = async () => {
    
    await app.register(cors);
    await app.register(plantsRoutes);


    try{
        await app.listen({port: 5000})
    } catch(err){
        process.exit(1)
    }
}

start();
