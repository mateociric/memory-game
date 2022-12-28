let playerBoxArr = [];

function playerTurn(ev) {

    //disable to get textContent from the <main>
    if (!ev.target.children.length) {

        let box = Number(ev.target.textContent);
        playerBoxArr.push(box);

    }

    //console.log(playerBoxArr);

}

export { playerBoxArr, playerTurn }