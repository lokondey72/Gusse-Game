let players = document.querySelector('.players');
let guess = document.querySelector('.guess');
let chances = document.querySelector('.chances');
let error = document.querySelector('.error');
let input_1 = document.querySelector('.input_1');
let submit_btn1 = document.querySelector('.submit_btn1');
let input_2 = document.querySelector('.input_2');
let submit_btn2 = document.querySelector('.submit_btn2');
let input_3 = document.querySelector('.input_3');
let submit_btn3 = document.querySelector('.submit_btn3');
let input_4 = document.querySelector('.input_4');
let submit_btn4 = document.querySelector('.submit_btn4');
let winner = document.querySelector('.winner');
let trofy = document.querySelector('.trofy');
let game_icon = document.querySelector('.game_icon');
let chancesAvailable2 = 5
let chancesAvailable3 = 5
let chancesAvailable4 = 5
let click = 0
let click2 = 0
let click3 = 0
// player 1 javascript start
submit_btn1.addEventListener('click', ()=>{
    if (input_1.value - 0) {
        if (input_1.value < 10) {
            players.innerHTML = "Player 2";
            input_1.style = "display: none;";
            submit_btn1.style = "display: none;";
            input_2.style = "display: inline-block;";
            submit_btn2.style = "display: inline-block;";
            chances.style = "display: inline-block;";
        }else{
            error.style = "display:none;";
            alert(error.innerHTML = "Please input a number under 10.!");
        }
    }else{
        error.style = "display:none;";
        alert(error.innerHTML = "Please input a number");
    }
})
// player 1 javascript end
// player 2 javascript start
submit_btn2.addEventListener('click', ()=>{
    ++click
    --chancesAvailable2
    if (input_2.value - 0) {
        if (input_2.value < 10) {
            if (click < 5) {
                chances.innerHTML = `You have ${chancesAvailable2} chance only`
                if (input_1.value === input_2.value) {
                    input_2.style = "display:none;";
                    submit_btn2.style = "display:none;";
                    input_3.style = "display: inline-block;";
                    submit_btn3.style = "display: inline-block;";
                    chances.innerHTML = "You have 5 chance only"
                    players.innerHTML = "Player 3";
                }
            }else{
                input_2.style = "display:none;";
                submit_btn2.style = "display:none;";
                input_3.style = "display: inline-block;";
                submit_btn3.style = "display: inline-block;";
                chances.innerHTML = "You have 5 chance only"
                players.innerHTML = "Player 3";
            }
        }else{
            error.style = "display:none;";
            alert(error.innerHTML = "Please input a number under 10.!");
        }
    }else{
        error.style = "display:none;";
        alert(error.innerHTML = "Please input a number");
    }
})
// player 2 javascript end
// player 3 javascript start
submit_btn3.addEventListener('click', ()=>{
    ++click2
    --chancesAvailable3
    if (input_3.value - 0) {
        if (input_3.value < 10) {
            if (click2 < 5) {
                chances.style = "display: inline-block;";
                chances.innerHTML = `You have ${chancesAvailable3} chance only`
                if (input_1.value === input_3.value) {
                    input_3.style = "display:none;";
                    submit_btn3.style = "display:none;";
                    input_4.style = "display: inline-block;";
                    submit_btn4.style = "display: inline-block;";
                    chances.innerHTML = "You have 5 chance only"
                    players.innerHTML = "Player 4";
                }
            }else{
                    input_3.style = "display:none;";
                    submit_btn3.style = "display:none;";
                    input_4.style = "display: inline-block;";
                    submit_btn4.style = "display: inline-block;";
                    chances.innerHTML = "You have 5 chance only"
                    players.innerHTML = "Player 4";
            }
        }else{
            error.style = "display:none;";
            alert(error.innerHTML = "Please input a number under 10.!");
        }
    }else{
        error.style = "display:none;";
        alert(error.innerHTML = "Please input a number");
    }
})
// player 3 javascript end
// player 4 javascript start
submit_btn4.addEventListener('click',()=>{
    ++click3
    --chancesAvailable4
    if (input_4.value - 0) {
        if (input_4.value < 10) {
            if (click3 < 5) {
                chances.innerHTML = `You have ${chancesAvailable4} chance only`
                if (input_1.value === input_4.value && input_1.value === input_3.value && input_1.value === input_2.value) {
                    input_4.style = "display:none;";
                    submit_btn4.style = "display:none;";
                    players.style = "display:none;";
                    chances.style = "display:none;";
                    game_icon.style = "display:none;";
                    chances.style = "display:none;";
                    trofy.style = "display: inline-block; text-shadow: 4px 3px 2px black;";
                    winner.style = "text-shadow: 5px 5px 2px black;";
                    guess.innerHTML = "Winner is"
                    winner.innerHTML = "Player-2 , Player-3 , Player-4.";
                }
                else if (input_1.value === input_4.value && input_1.value != input_2.value && input_1.value != input_3.value) {
                    input_4.style = "display:none;";
                    submit_btn4.style = "display:none;";
                    players.style = "display:none;";
                    chances.style = "display:none;";
                    game_icon.style = "display:none;";
                    chances.style = "display:none;";
                    trofy.style = "display: inline-block; text-shadow: 4px 3px 2px black;";
                    winner.style = "text-shadow: 5px 5px 2px black;";
                    guess.innerHTML = "Winner is"
                    winner.innerHTML = "Player-1 , Player-4.";
                }
                else if (input_1.value === input_4.value && input_1.value === input_2.value) {
                    input_4.style = "display:none;";
                    submit_btn4.style = "display:none;";
                    players.style = "display:none;";
                    chances.style = "display:none;";
                    game_icon.style = "display:none;";
                    chances.style = "display:none;";
                    trofy.style = "display: inline-block; text-shadow: 4px 3px 2px black;";
                    winner.style = "text-shadow: 5px 5px 2px black;";
                    guess.innerHTML = "Winner is"
                    winner.innerHTML = "Player-1 , Player-2 , Player-4.";
                }
                else if (input_1.value === input_4.value && input_1.value === input_3.value) {
                    input_4.style = "display:none;";
                    submit_btn4.style = "display:none;";
                    players.style = "display:none;";
                    chances.style = "display:none;";
                    game_icon.style = "display:none;";
                    chances.style = "display:none;";
                    trofy.style = "display: inline-block; text-shadow: 4px 3px 2px black;";
                    winner.style = "text-shadow: 5px 5px 2px black;";
                    guess.innerHTML = "Winner is"
                    winner.innerHTML = "Player-1 , Player-3 , Player-4.";
                }
            }
            else if (input_1.value === input_3.value && input_1.value != input_2.value) {
                    input_4.style = "display:none;";
                    submit_btn4.style = "display:none;";
                    players.style = "display:none;";
                    chances.style = "display:none;";
                    game_icon.style = "display:none;";
                    chances.style = "display:none;";
                    trofy.style = "display: inline-block; text-shadow: 4px 3px 2px black;";
                    winner.style = "text-shadow: 5px 5px 2px black;";
                    guess.innerHTML = "Winner is"
                    winner.innerHTML = "Player-1 , Player-3.";
            }
            else if (input_1.value === input_2.value && input_1.value === input_3.value) {
                    input_4.style = "display:none;";
                    submit_btn4.style = "display:none;";
                    players.style = "display:none;";
                    chances.style = "display:none;";
                    game_icon.style = "display:none;";
                    chances.style = "display:none;";
                    trofy.style = "display: inline-block; text-shadow: 4px 3px 2px black;";
                    winner.style = "text-shadow: 5px 5px 2px black;";
                    guess.innerHTML = "Winner is"
                    winner.innerHTML = "Player-1 , Player-2 , Player-3.";
            }
            else if (input_1.value === input_2.value){
                    input_4.style = "display:none;";
                    submit_btn4.style = "display:none;";
                    players.style = "display:none;";
                    chances.style = "display:none;";
                    game_icon.style = "display:none;";
                    chances.style = "display:none;";
                    trofy.style = "display: inline-block; text-shadow: 4px 3px 2px black;";
                    winner.style = "text-shadow: 5px 5px 2px black;";
                    guess.innerHTML = "Winner is"
                    winner.innerHTML = "Player-1 , Player-2.";
            }else{
                    input_4.style = "display:none;";
                    submit_btn4.style = "display:none;";
                    players.style = "display:none;";
                    chances.style = "display:none;";
                    game_icon.style = "display:none;";
                    chances.style = "display:none;";
                    trofy.style = "display: inline-block; text-shadow: 4px 3px 2px black;";
                    winner.style = "text-shadow: 5px 5px 2px black;";
                    guess.innerHTML = "Winner is"
                    winner.innerHTML = "Player-1";
            }
        }else{
            error.style = "display:none;";
            alert(error.innerHTML = "Please input a number under 10.!");
        }
    }else{
        error.style = "display: none;";
        alert(error.innerHTML = "Please input a number");
    }
})
// player 4 javascript end