let aiBoxArr = [];

function aiActivate(fnAiStop, elGameBoxes, animationSpeed) {
    let rnd = Math.ceil(Math.random(1) * 16);
    aiBoxArr.push(rnd);
    //add class & remove class
    elGameBoxes.children[rnd - 1].classList.add('rotate-scale-down-diag-1');
    setTimeout(function() {
        elGameBoxes.children[rnd - 1].classList.remove('rotate-scale-down-diag-1');
    }, animationSpeed - 100);

    fnAiStop();
}

export { aiBoxArr, aiActivate }