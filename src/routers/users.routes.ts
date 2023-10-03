import { signUp, getUsers } from "@/controllers/users.controllers";
import validateSchema from "@/middlewares/validateSchema";
import { participantSchema } from "@/schemas/participant.schema";
import { Router } from "express";

const participantsRouter = Router()

participantsRouter.post('/participants', validateSchema(participantSchema), signUp);
participantsRouter.get('/participants', getUsers);

export { participantsRouter };