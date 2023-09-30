import { User } from "@prisma/client";

export type UserParams = Omit<User, "id" | "createdAt" | "updatedAt" >

export type AplicationError = { name: string, message: string, status: number }