import { prisma } from "@/config";
import { GameParams } from "@/protocols";
import gamesServices from "@/services/games.service";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export async function createGame(req: Request, res: Response, next: NextFunction) {
    const { body }: { body: GameParams } = req;

    try {
        const newGame = await gamesServices.createGame(body)
        return res.status(httpStatus.CREATED).send(newGame)
    } catch (err) {
        const ERROR_DEV_MESSAGE = `ERROR MESSAGE: ${err.message}`
        console.log(err);
        next(err)
    }
}

export async function getGames(req: Request, res: Response, next: NextFunction) {
    try {
        const games = await gamesServices.getGames()
        return res.status(httpStatus.OK).send(games)
    }
    catch (err) {
        const ERROR_DEV_MESSAGE = `ERROR MESSAGE: ${err.message}`
        console.log(err);
        next(err)
    }
}