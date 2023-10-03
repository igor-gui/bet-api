import joi from 'joi'

export const betSchema = joi.object({
    homeTeamScore: joi.number().required(),
    awayTeamScore: joi.number().required(),
    amountBet: joi.number().integer().min(0).required(),
    gameId: joi.number().required(),
    participantId: joi.number().required(),
});