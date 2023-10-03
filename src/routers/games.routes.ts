import { createGame, getGames } from "@/controllers/games.controllers";
import validateSchema from "@/middlewares/validateSchema";
import { gameSchema } from "@/schemas/game.schema";
import { Router } from "express";

const gamesRouter = Router()

gamesRouter.post('/games', validateSchema(gameSchema), createGame)
gamesRouter.get('/games', getGames)

export { gamesRouter };