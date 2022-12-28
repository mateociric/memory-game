import { gameBoxes, MenuButtons } from './module/game-elements.js';
import { diff, setDifficulty } from './module/difficulty.js';
import { aiBoxArr, aiActivate } from './module/ai.js';
import { playerBoxArr, playerTurn } from './module/player.js';
import pushEvent from './module/utility.js';

function startGame() {

    //remove numbers from boxes on HARD difficulty
    if (MenuButtons.DIFFICULTY.textContent === 'HARD') {

        let gameBoxesArr = Array.from(gameBoxes.children);
        
        gameBoxesArr.forEach(el => {
            el.style.fontSize = '0px';
        })

    }

    //set speed animation in CSS
    document.documentElement.style.setProperty('--animSpeed', `${TimerInterval[diff] / 1000}s`)

    MenuButtons.LEVEL.textContent = level;
    MenuButtons.SCORE.textContent = score;
    //disable to start game again
    MenuButtons.NEWGAME.removeEventListener('click', startGame);
    MenuButtons.DIFFICULTY.removeEventListener('click', setDifficulty);

    setTimeout(aiActivate, TimerInterval[diff], aiStop, gameBoxes, TimerInterval[diff]);
    setTimeout(function () {
        gameBoxes.addEventListener('click', playerTurn);
    }, TimerInterval[diff] + 100);

}

function gameOver() {

    level = 1;
    score = 0;
    playerBoxArr.length = 0;
    aiBoxArr.length = 0;

    MenuButtons.NEWGAME.addEventListener('click', startGame);
    MenuButtons.DIFFICULTY.addEventListener('click', setDifficulty);
    MenuButtons.LEVEL.textContent = 'LEVEL';
    MenuButtons.SCORE.textContent = 'SCORE';

    gameBoxes.removeEventListener('click', playerTurn);

}

function nextLevel() {

    level += 1;
    playerBoxArr.length = 0;
    aiBoxArr.length = 0;
    timer = setInterval(aiActivate, TimerInterval[diff], aiStop, gameBoxes, TimerInterval[diff]);

    MenuButtons.LEVEL.textContent = level;

    //disable player to choose boxes when level progress
    gameBoxes.removeEventListener('click', playerTurn);

}

function aiStop() {

    if (aiBoxArr.length === level) {

        clearInterval(timer);
        gameBoxes.addEventListener('click', playerTurn);

    }

}

function addScore() {

    score += ScoreTable[diff];
    MenuButtons.SCORE.textContent = score;

}

const ScoreTable = {

    1: 5,
    2: 10,
    3: 20

}

//controls ai speed of randomaizing for current difficulty
const TimerInterval = {

    1: 1000,
    2: 750,
    3: 500,

}

let level, score, timer;

level = 1;
score = 0;

MenuButtons.NEWGAME.addEventListener('click', startGame);
MenuButtons.DIFFICULTY.addEventListener('click', setDifficulty);

pushEvent(playerBoxArr, aiBoxArr, gameOver, nextLevel, addScore);