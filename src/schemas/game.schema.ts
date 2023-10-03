import { GameParams } from "@/protocols";
import joi from "joi";


export const gameSchema = joi.object<GameParams>({
    awayTeamName: joi.string().min(4),
    homeTeamName: joi.string().min(4)
});