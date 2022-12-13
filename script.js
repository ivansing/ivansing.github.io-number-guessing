let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const humanDiff = Math.abs(targetGuess - humanGuess);
    const computerDiff = Math.abs(targetGuess - computerGuess);
    return humanDiff <= computerDiff;

};
const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}


const advanceRound = () => {
    currentRoundNumber++;
};