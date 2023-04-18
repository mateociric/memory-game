let diff = 2;

const DifficultyMode = {
    1: 'EASY',
    2: 'NORMAL',
    3: 'HARD' 
}

function setDifficulty() {   
    diff++

    if(diff > Object.keys(DifficultyMode).length) {
        diff = 1;
    }

    this.textContent = DifficultyMode[diff];
}

export { diff, setDifficulty };