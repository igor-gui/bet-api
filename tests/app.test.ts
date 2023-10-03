import app, { init } from "../src/app"
import supertest from "supertest"
import { createNewValidParticipant } from "./factories/participants.factory";
import { cleanDB } from "./helpers";

const server = supertest(app);

beforeAll(async () => {
    const { PORT } = process.env;
    await init().then(() => {
        app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))
    })
    await cleanDB()
})

describe("/api", () => {

    it("should /POST a new user at '/participants'", async () => {

        const user = createNewValidParticipant()

        const promise = await server.post('/participants').send(user);
        const { statusCode } = promise;
        expect(statusCode).toBe(201)

    })

    it('should refuse to /POST a user with not enough balance', async () => {
        const result = await server.post('/participants').send(createNewValidParticipant(false))
        const { statusCode } = result;
        expect(statusCode).toBe(406)
    })

    it("should /GET all participants", async () => {
        const result = await server.get('/participants')
        const { status } = result;
        expect(status).toBe(200)
    })


})