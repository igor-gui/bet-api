interface Bet {
    amountBet: number
    totalWinnersBet: number
    allBetOnThisGame: number
    houseFee: number
}
export function calculateBet(bet: Bet) : number {
    const { amountBet, totalWinnersBet, allBetOnThisGame, houseFee } = bet;
    const PRIZE = (amountBet / totalWinnersBet) * (allBetOnThisGame) * (1 - houseFee)
    return PRIZE;
}