import { prisma } from "@/config";

export async function cleanDB() {
    await prisma.user.deleteMany({})
}