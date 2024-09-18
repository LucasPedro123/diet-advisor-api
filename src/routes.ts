import { ok } from 'assert'
import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest, 
    FastifyReply
} from 'fastify'

export default async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get('/teste', (request: FastifyRequest, reply: FastifyReply) => {
        console.log("Rota Chamada!")
        
        reply.send({ ok: true })
    })
}