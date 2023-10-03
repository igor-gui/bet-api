import supertest from "supertest";
import app, { init } from "@/app";
import { cleanDB } from "./helpers";
import { newGame } from "./factories/games.factory";

const server = supertest(app);

beforeAll(async () => {
    const { PORT } = process.env;
    await init().then(() => {
        app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))
    })
    await cleanDB()
})

describe('/GAMES', () => {
    it('Should /POST a new game', async () => {
        const promise = await server.post('/games').send(newGame())
        const { statusCode } = promise;
        expect(statusCode).toBe(201)
    })
})