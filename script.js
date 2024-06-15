let guesses = document.querySelector(".guesses");
let remaining = document.querySelector(".lastResult");
let wrapper = document.querySelector("#wrapper");
let guess = document.querySelector("#guess");
let guessField = document.querySelector("#guessField");
let body = document.querySelector('body');
let rem = 5; 
let guessArray = [];



const submit = document.querySelector(".guessSubmit");



submit.addEventListener("click", function guessNumber(e) {
    e.preventDefault();
        let randomNumber = (Math.random()*10).toFixed(0);
        console.log(randomNumber);
        const form = document.querySelector(".form")
        const userGuess = document.querySelector("#guessField").value;
        if(!userGuess){
            alert("Please enter your Guess number!");
        }
        else{
            guesses.innerHTML = updateArray(userGuess);
            document.querySelector("#guessField").value = "";
            if(userGuess == randomNumber){
                userWon();
            }
            rem--;
            updateRemaining(rem);
        }
        if(rem==0) userLost();
})

function updateRemaining(rem){
    remaining.innerHTML = rem;
}

function updateArray(userGuess){
    guessArray.push(userGuess);
    let guessString = new String();
    guessArray.forEach(item => {
    guessString += item+" ";
    });
    return guessString;
}



function userWon(){
    wrapper.style.backgroundColor = "#4990a0";
    guess.innerHTML = "You Won";
    guessField.remove();
    submit.value = "Play Again";
    submit.addEventListener("click", ()=>{
        location.reload();
    });  
}



function userLost(){
    wrapper.style.backgroundColor = "#C80036";
    guess.innerHTML = "You Lost";
    guessField.remove();
    submit.value = "Try Again";
    submit.addEventListener("click", ()=>{
    location.reload();
    }); 
}




