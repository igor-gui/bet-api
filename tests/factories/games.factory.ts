import { GameParams } from "@/protocols";
import { fakerEN, fakerPT_BR } from "@faker-js/faker";

export function newGame(): GameParams {
    return {
        homeTeamName: fakerPT_BR.company.name(),
        awayTeamName: fakerEN.person.lastName()
    }
}