(function(){
    "use strict";
    var startGame = document.getElementById('startgame');
    var gameControl = document.getElementById('gamecontrol');
    var game = document.getElementById('game');
    var score = document.getElementById('score');
    var actionArea = document.getElementById('actions');

    const rollSound = new Audio('sounds/roll.mp3');
    const incorrectSound = new Audio('sounds/incorrect.mp3');

    var gameData = {
        dice: ['1die.png', '2die.png', '3die.png', 
        '4die.png', '5die.png', '6die.png'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    startGame.addEventListener("click", function(){
        gameData.index = Math.round(Math.random());
        gameControl.innerHTML = '<h2>The Game Has Started</h2>';
        gameControl.innerHTML = '<button id="quit">Wanna Quit?</button>';

        document.getElementById('quit').addEventListener('click', function(){
            location.reload();
            /* Not sure why this doesn't play */
            incorrectSound.play();
        });

        gameControl.removeAttribute("class");
        game.removeAttribute("class");
        actionArea.removeAttribute("class");
        score.removeAttribute("class");

        actionArea.className = "center";

        setUpTurn();
    });

    function setUpTurn() {
        game.innerHTML = `<h2>${gameData.players[gameData.index]} roll the dice!</h2>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        document.getElementById('roll').addEventListener('click', function(){
            throwDice();
            rollSound.play();
        });
    };

    function throwDice() {
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = 
            `<img src="${gameData.dice[gameData.roll1 - 1]}" width="100px">
            <img src="${gameData.dice[gameData.roll2 - 1]}" width="100px">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        console.log(gameData);

        if (gameData.rollSum === 2){
            game.innerHTML += '<p>Oh snap! Snake eyes!</p>';
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            showCurrentScore();
            setTimeout(setUpTurn, 2000);
            actionArea.className = "center";
        }
        else if (gameData.roll1 === 1 || gameData.roll2 === 1){
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>Sorry one of your rolls was a one.<br> Switching to ${gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn, 2000);
            actionArea.className = "center";
        }
        else {
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<p><button id="rollagain">Roll again</button>  or  <button id="pass">Pass</button></p>';
            actionArea.className = "bottom";

            document.getElementById('rollagain').addEventListener('click', function(){
                throwDice();
                /* Not sure why this doesn't play */
                rollSound.play();
            });
            document.getElementById('pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
                actionArea.className = "center";
                incorrectSound.play();
            });

            checkWinningCondition();                
        };
    };

    function checkWinningCondition () {
        if (gameData.score[gameData.index] > gameData.gameEnd){
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;

            actionArea.innerHTML = '';
            document.getElementById('quit').innerHTML = "Start a New Game";
        }
        else {
            showCurrentScore();
        }
    };

    function showCurrentScore(){
        score.innerHTML = `<p>${gameData.players[0]}: <strong>${gameData.score[0]}</strong></p>
        <p>${gameData.players[1]}: <strong>${gameData.score[1]}</strong></p>`;
    };
}());