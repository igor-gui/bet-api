import { PrismaClient } from "@prisma/client";
import faker, { fakerPT_BR } from "@faker-js/faker"
const prisma = new PrismaClient();

async function main() {
    let game = await prisma.game.findFirst();
    if (!game) {
        const date = new Date;
        const newName = fakerPT_BR.person.lastName
        game = await prisma.game.create({
            data: {
                createdAt: date.toISOString(),
                updatedAt: date.toISOString(),
                awayTeamName: newName(),
                homeTeamName: newName()
            },
        });
    }

    console.log({ game });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });