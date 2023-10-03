import { BetParams } from "@/protocols";
import betsServices from "@/services/bets.service";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export async function createBet(req: Request, res: Response, next: NextFunction) {
    const { body }: { body: BetParams } = req;
    try {
        const newBet = await betsServices.createBet(body);
        return res.status(httpStatus.CREATED).send(newBet);

    } catch (err) {
        const ERROR_DEV_MESSAGE = `ERROR MESSAGE: ${err.message}`
        console.log(err);
        next(err)
    }
}

export async function getBets(req: Request, res: Response, next: NextFunction) {
    try {
        const bets = await betsServices.getBets()
        return res.status(httpStatus.OK).send(bets)

    } catch (err) {
        const ERROR_DEV_MESSAGE = `ERROR MESSAGE: ${err.message}`
        console.log(err);
        next(err)
    }
}