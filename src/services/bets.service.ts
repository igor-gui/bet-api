import { BetParams } from "@/protocols";
import betsRepositories from "@/repositories/bet.repositories";



async function createBet(bet: BetParams) {
    return await betsRepositories.createBet(bet);
}

async function getBets() {
    return await betsRepositories.getBets()
}



const betsServices = {
    createBet,
    getBets
}

export default betsServices;