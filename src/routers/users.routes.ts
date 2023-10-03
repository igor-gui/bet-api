import { signUp, getUsers } from "@/controllers/users.controllers";
import { Router } from "express";

const participantsRouter = Router()

participantsRouter.post('/participants', signUp);
participantsRouter.get('/participants', getUsers);

export { participantsRouter };