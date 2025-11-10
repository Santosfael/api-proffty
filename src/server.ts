import fastify from "fastify"

const server = fastify({
    logger: {
        transport: {
            target: "pino-pretty",
            options: {
                translateTime: "HH:MM:ss Z",
                ignore: "pid,hostname"
            }
        }
    }
})

const classes = [
    { id: 1, name: "Português" },
    { id: 2, name: "Inglês" },
    { id: 3, name: "Matemática" },
    { id: 4, name: "Geografia" }
]

server.get("/classes", (request, replay) => {
    return replay.send({ classes })
})

server.listen({ port: 3333 }).then(() => {
    console.log("HTTP server is running")
})