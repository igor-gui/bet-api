import { AplicationError } from "@/protocols"
import httpStatus from "http-status"

const MINIMUM_BALANCE = 1000
const floatBalance = (MINIMUM_BALANCE/100).toFixed(2)

export function notEnoughCash(): AplicationError {
    return {
        name: 'notEnoughCash',
        message: `The minimum cash amount required to create a user is ${floatBalance} BRL`,
        status: httpStatus.NOT_ACCEPTABLE
    }

}


