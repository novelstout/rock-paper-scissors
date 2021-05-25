/*

Rock Paper Scissors

user inputs choice (prompt())
program stores choice in variable (let userInput)
computer generates choice (Math.floor(Math.random())
computer choice stored in variable (let comChoice)
program compares the two choices (playRound())
if rock and paper are chosen, paper wins (if/else)
if paper and scissors are chosen, scissors wins (if/else)
if rock and scissors are chosen, rock wins (if/else)
*/

/*Function 1: computerPlay generates random number and assigns
a choice (rock, paper, scissors) to it based on the generated number.
All of this in turn is stored in a variable 'comChoice' */
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

/*Function #2: playRound takes playerSelect and comSelect and compares
their stored strings to one another. (Need to find a way to condense) */
function playRound(playerSelect, comSelect){
    let roundWinner
    if (playerSelect == 'rock' && comSelect == 'scissors'){
        roundWinner = 'Rock beats Scissors! You win!';
        return roundWinner;
    }
    else if (playerSelect == 'rock' && comSelect == 'paper'){
        roundWinner = 'Oops! Paper covers Rock! You lose!';
        return roundWinner;
    }
    else if (playerSelect == 'rock' && comSelect == 'rock'){
        roundWinner = 'Uh-oh! We have a tie!';
        return roundWinner;
    }
    else if (playerSelect == 'paper' && comSelect == 'scissors'){
        roundWinner = 'Oops! Scissors beats paper! You lose!';
        return roundWinner;
    }
    else if (playerSelect == 'paper' && comSelect == 'rock'){
        roundWinner = 'Paper covers Rock! You win!';
        return roundWinner;
    }
    else if (playerSelect == 'paper' && comSelect == 'paper'){
        roundWinner = 'Uh-oh! We have a tie!';
        return roundWinner;
    }
    else if (playerSelect == 'scissors' && comSelect == 'paper'){
        roundWinner = 'Scissors beats paper! You win!';
        return roundWinner;
    }
    else if (playerSelect == 'scissors' && comSelect == 'rock'){
        roundWinner = 'Oops! Rock beats scissors! You lose!';
        return roundWinner;
    }
    else if (playerSelect == 'scissors' && comSelect == 'scissors'){
        roundWinner = 'Uh-oh! We have a tie!';
        return roundWinner;
    }
    else {
        let roundWinner = alert('Please enter a choice (Rock, Paper, or Scissors).')
        return roundWinner;
    }
}




/* Function #3: Intializaes a variable ('userInput') which consists
of a prompt which takes the user's input and stores it. It then runs 
the previously function 'playRound' with the data stored from 'userInput'
used for the argument 'playerSelect' while running function computerPlay()
for the argument 'comSelect'. Setting it up this way should allow the
computer to generate a new number/choice each time the function is run. */
function game(){
    let userInput = prompt('Choice?').toLowerCase();
    alert(playRound(userInput, computerPlay()));
}

console.log(game());

/* End of Code */