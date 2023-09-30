import { notEnoughCash } from "@/errors";
import { UserParams } from "@/protocols";
import usersRepositories from "@/repositories/users.repositories";

async function createUser(user: UserParams) {

    if(!balanceIsEnough(user)) throw notEnoughCash()

    return await usersRepositories.createUser(user);
};

async function findUsers(){
    return await usersRepositories.findUsers()
}

function balanceIsEnough(user: UserParams): boolean {
    const { balance }: { balance: number } = user;
    return (balance >= 1000)
}

const usersServices = {
    createUser,
    findUsers
};

export default usersServices;