import faker, { fakerEN_GB } from "@faker-js/faker"


export function createNewValidParticipant(isValid: boolean = true) {

    const { balance } = isValid ? biggerThanAThousand() : lowerThanAThousand();
    const name = fakerEN_GB.person.firstName()
    return { name, balance }

}

const lowerThanAThousand = () => {
    const balance: number = Math.floor(Math.random() * 1000);
    return { balance }
}

const biggerThanAThousand = () => {
    const balance: number = Math.floor(Math.random() * 1000) + 1001;
    return { balance }
}