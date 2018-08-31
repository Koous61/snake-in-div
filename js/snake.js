var GAME_SPEED = 1500;
var stan_size = 3;

window.onload = function () {
    var id_div = 1;
    for(var i = 0; i < 20; i++) {
        for(var j = 0; j < 20; j++) {
            var div = document.createElement("div");
            div.setAttribute("id", id_div);
            div.setAttribute("class", "maps");
            document.body.appendChild(div);
            id_div++;
        }
        var br = document.createElement("br");
        document.body.appendChild(br);
    }
    createApple();
    createSnake();
    document.addEventListener("keydown", keyPush);
    setInterval(game, GAME_SPEED / 15);
};

function createApple() {
    var rand = parseInt((1 + Math.random() * (400 - 1)));
    var apple = document.getElementById(rand);
    apple.classList.add("apple");
    console.log(apple);
}

function createSnake() {
    var rand = parseInt((1 + Math.random() * (400 - 1)));
    for (var i = 0; i < stan_size; i++) {
        var snake = document.getElementById(rand-i);
        snake.classList.add("snake");
    }
}

function game() {

}

function keyPush(evt) {
    switch (evt.keyCode) {
        case 37:
            xv = -1;
            yv = 0;
            break;
        case 38:
            xv = 0;
            yv = -1;
            break;
        case 39:
            xv = 1;
            yv = 0;
            break;
        case 40:
            xv = 0;
            yv = 1;
            break;
    }
}