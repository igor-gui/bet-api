import { prisma } from "@/config";
import { GameParams } from "@/protocols";

async function createGame(game: GameParams) {
    const { awayTeamName, homeTeamName } = game;
    const date = new Date()
    const createdAt = date.toISOString();
    const updatedAt = date.toISOString();

    return await prisma.game.create({ data: { homeTeamName, awayTeamName, createdAt, updatedAt } })
}

async function getGames(){
    return await prisma.game.findMany();
}

const gamesRepositories = {
    createGame,
    getGames
}

export default gamesRepositories;