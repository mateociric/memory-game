//override push method -> https://stackoverflow.com/questions/5306843/attach-event-listener-to-array-for-push-event
export default function pushEvent(playerArr, aiArr, fnGameOver, fnNextLevel, fnAddScore) {

    let isChoiceRight;

    playerArr.push = function (num) {
        playerArr[playerArr.length] = num;
        let isChoiceRight = playerArr.compareWith(aiArr)

        if(isChoiceRight === false) {
            fnGameOver();
        } else if (playerArr.length === aiArr.length) {
            fnNextLevel();
            fnAddScore();
        } else {
            fnAddScore();
        }
    }
}

//to compare playerBoxArr with aiBoxArr
Array.prototype.compareWith = function(aiArr) {
    if(this[this.length - 1] === aiArr[this.length - 1]) {
        return true;
    }
    if(this[this.length - 1] !== aiArr[this.length - 1]) {
        return false;
    }
}