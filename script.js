/*

Rock Paper Scissors

user inputs choice (check)
program stores choice in variable (check)
computer generates choice (check)
computer choice stored in variable (check)
program compares the two choices (check)
if rock and paper are chosen, paper wins (check)
if paper and scissors are chosen, scissors wins (check)
if rock and scissors are chosen, rock wins (check)
*/

/*Created variables for use in game. comSelect runs and
stores the outcome of function computerPlay while pSelect
is for user input. */
const comSelect = computerPlay();
const pSelect = 'Paper'.toLowerCase();

/*Function 1: computerPlay generates random number and assigns
a choice (rock, paper, scissors) to it based on the generated number.
All of this in turn is stored in a variable 'comChoice */
function computerPlay() {
   let comChoice = Math.floor(Math.random() * 3)
   if (comChoice == 0){
       comChoice = 'rock';
       return comChoice;
   }

   else if(comChoice == 1) {
       comChoice = 'paper';
       return comChoice;
   }

   else if(comChoice == 2){
       comChoice = 'scissors';
       return comChoice;
   }

   
}

/*Function #2: playRound takes pSelect and comSelect and compares
their stored strings to one another. (Need to find a way to condense) */
function playRound(pSelect, comSelect){
    let roundWinner
    if (pSelect == 'rock' && comSelect == 'scissors'){
        roundWinner = 'Rock beats Scissors! You win!';
        return roundWinner;
    }
    else if (pSelect == 'rock' && comSelect == 'paper'){
        roundWinner = 'Oops! Paper covers Rock! You lose!';
        return roundWinner;
    }
    else if (pSelect == 'rock' && comSelect == 'rock'){
        roundWinner = 'Uh-oh! We have a tie!';
        return roundWinner;
    }
    else if (pSelect == 'paper' && comSelect == 'scissors'){
        roundWinner = 'Oops! Scissors beats paper! You lose!';
        return roundWinner;
    }
    else if (pSelect == 'paper' && comSelect == 'rock'){
        roundWinner = 'Paper covers Rock! You win!';
        return roundWinner;
    }
    else if (pSelect == 'paper' && comSelect == 'paper'){
        roundWinner = 'Uh-oh! We have a tie!';
        return roundWinner;
    }
    else if (pSelect == 'scissors' && comSelect == 'paper'){
        roundWinner = 'Scissors beats paper! You win!';
        return roundWinner;
    }
    else if (pSelect == 'scissors' && comSelect == 'rock'){
        roundWinner = 'Oops! Rock beats scissors! You lose!';
        return roundWinner;
    }
    else if (pSelect == 'scissors' && comSelect == 'scissors'){
        roundWinner = 'Uh-oh! We have a tie!';
        return roundWinner;
    }
    else {
        let roundWinner = alert('Please enter a choice.')
        return roundWinner;
    }
}




/* Function #3: runs function playRound and allows user input */
function game(){
    /* let userInput = prompt('Choice?').toLowerCase(); */
    return playRound(pSelect, comSelect);
}



