import { prisma } from "@/config";
import { BetParams } from "@/protocols";

async function createBet(bet: BetParams) {
    const date = new Date();
    const createdAt = date.toISOString()
    const updatedAt = date.toISOString()

    return await prisma.bet.create({ data: { ...bet, createdAt, updatedAt } })
}

async function getBets() {
    return await prisma.bet.findMany()
}

const betsRepositories = {
    createBet,
    getBets
}

export default betsRepositories;