// ekrana yazdırmada sıkıntı var. Switch case yapısında koşulların içinden consola değil de ekrana yazı yazdırmak kaldı.
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_h2 = document.querySelector(".result > h2");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

getComputerChoice();
function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3 );
    let computerChoice = choices[randomNumber];
    return computerChoice;
}

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function game(userChoice){
    var x = userChoice + getComputerChoice();
    var c = x[1];
    switch(x){
        case"rs":
        case"pr":
        case"sp":
            userScore++;
            userScore_span.innerHTML = userScore;
            computerScore_span.innerHTML = computerScore;
            result_h2.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(c) + ". You Win :) "
            break;
        case"rp":
        case"ps":
        case"sr":
            computerScore++;
            userScore_span.innerHTML = userScore;
            computerScore_span.innerHTML = computerScore;
            result_h2.innerHTML =convertToWord(userChoice) + " loses " + convertToWord(c) + ". You Lost  :("
            break;
        case"rr":
        case"pp":
        case"ss":
            userScore_span.innerHTML = userScore;
            computerScore_span.innerHTML = computerScore;
            result_h2.innerHTML = "It's Draw :/"
            break;
    }

    }
    
    

function main(){
    rock_div.addEventListener('click',function(){
        game("r");
    })
    paper_div.addEventListener('click', function(){
        game("p");
    })
    scissors_div.addEventListener('click', function(){
        game("s");
    })
}
main();


