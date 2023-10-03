import { GameParams } from "@/protocols";
import gamesRepositories from "@/repositories/games.repositories";

async function createGame(game: GameParams) {
    return await gamesRepositories.createGame(game)
}

async function getGames(){
    return await gamesRepositories.getGames()
}


const gamesServices = {
    createGame,
    getGames
};

export default gamesServices;