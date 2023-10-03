import { UserParams } from "@/protocols";
import joi from "joi";

export const participantSchema = joi.object<UserParams>({
    name: joi.string().min(4),
    balance: joi.number().min(1000)
})