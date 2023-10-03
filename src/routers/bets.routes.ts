import { createBet } from "@/controllers/bets.controllers";
import validateSchema from "@/middlewares/validateSchema";
import { betSchema } from "@/schemas/betSchema";
import { Router } from "express";

const betsRouter = Router()

betsRouter.post('/bets', validateSchema(betSchema), createBet);
betsRouter.get('/bets', () => { });

export { betsRouter }