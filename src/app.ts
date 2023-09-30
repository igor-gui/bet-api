import 'reflect-metadata';
import 'express-async-errors';
import express, { Express } from 'express';
import cors from 'cors';
import { loadEnv, connectDb, disconnectDB } from '@/config';
import usersRouter from '@/routers/users.routes';
import errorHandler from './middlewares/errorHandler';

loadEnv()


const app = express()
app.use(express.json())
app.use(cors())

app.use([usersRouter])
app.use(errorHandler)

export function init(): Promise<Express> {
    connectDb();
    return Promise.resolve(app)
}

export async function close(): Promise<void> {
    return await disconnectDB()

}

export default app;