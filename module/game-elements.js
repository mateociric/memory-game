let gameMenu, gameBoxes;

gameMenu = document.getElementById('game-menu').children;
gameBoxes = document.getElementById('game-boxes');

const MenuButtons = {
    NEWGAME: gameMenu[0],
    DIFFICULTY: gameMenu[1],
    LEVEL: gameMenu[2],
    SCORE: gameMenu[3]
}

export { gameBoxes, MenuButtons }