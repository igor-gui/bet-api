import { prisma } from "@/config";
import { UserParams } from "@/protocols";

async function createUser(user: UserParams) {
    const currentTime = new Date().toISOString()
    return await prisma.user.create({ data: { ...user, createdAt: currentTime, updatedAt: currentTime } })
}

async function findUsers(){
    return await prisma.user.findMany({})
}

const usersRepositories = {
    createUser,
    findUsers
}
export default usersRepositories;