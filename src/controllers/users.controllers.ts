import { AplicationError, UserParams } from "@/protocols";
import usersServices from "@/services/user.services";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export async function signUp(req: Request, res: Response, next: NextFunction) {

    const { body }: { body: UserParams } = req;

    try {
        const newUser = await usersServices.createUser(body)
        return res.status(httpStatus.CREATED).send(newUser);

    } catch (err) {
        const ERROR_DEV_MESSAGE: string = `ERROR MESSAGE: ${err.message}`;
        console.log(ERROR_DEV_MESSAGE);
        next(err)
    }
}

export async function getUsers(req: Request, res: Response, next: NextFunction) {
    try {
        const users = await usersServices.findUsers()
        return res.send(users);
    }
    catch (err) {
        const ERROR_DEV_MESSAGE: string = `ERROR MESSAGE: ${err.message}`;
        console.log(ERROR_DEV_MESSAGE);
        next(err)
    }
}