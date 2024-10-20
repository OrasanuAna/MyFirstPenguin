let answer = Math.floor(Math.random() * 20 + 1);
let guesses = 0;

document.getElementById("guessbutton").onclick = function(){
    
    let guess = document.getElementById("guessfield").value;
    guesses+=1;

    if(guess == answer)
    {
        alert(`Congratulations! The numer is ${answer} . It took you ${guesses} guesses`);
    }
    else if(guess < answer )
    {
        alert("Too small!");
    }
    else 
    {
        alert("Too large!");
    }
}

document.getElementById("resetbutton").onclick = function(){
    guesses = 0;
    answer = Math.floor(Math.random() * 20 + 1);
    let guess = document.getElementById("guessfield").value = "";
}
