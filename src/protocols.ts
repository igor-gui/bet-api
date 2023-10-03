import { Bet, Game, User } from "@prisma/client";

export type UserParams = Omit<User, "id" | "createdAt" | "updatedAt">

export type AplicationError = { name: string, message: string, status: number }

export type GameParams = Pick<Game, "awayTeamName" | "homeTeamName">

export type BetParams = Pick<
    Bet,
    "amountBet" |
    "awayTeamScore" |
    "homeTeamScore" |
    "gameId" |
    "participantId">