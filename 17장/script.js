const choices = ['가위', '바위', '보'];
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');

// ❗ 버튼 매칭 오류 수정
rockBtn.addEventListener('click', () => playGame('바위'));
paperBtn.addEventListener('click', () => playGame('보'));
scissorsBtn.addEventListener('click', () => playGame('가위'));

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return '무승부!';
    }
    
    if (
        (playerChoice === '가위' && computerChoice === '보') ||
        (playerChoice === '바위' && computerChoice === '가위') ||
        (playerChoice === '보' && computerChoice === '바위')
    ) {
        return '승리!';
    } else {
        return '패배!';
    }
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();

    playerChoiceDisplay.textContent = `나의 선택: ${playerChoice}`;
    computerChoiceDisplay.textContent = `컴퓨터의 선택: ${computerChoice}`;
    
    const result = determineWinner(playerChoice, computerChoice);
    resultDisplay.textContent = `결과: ${result}`;

    if (result === '승리!') {
        resultDisplay.style.color = 'green';
    } else if (result === '패배!') {
        resultDisplay.style.color = 'red';
    } else {
        resultDisplay.style.color = 'blue';
    }
}
