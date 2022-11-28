/* console.log("I like pizza!");
console.log('It is really good');
//window.alert("Boo!!");

//Pinguini sclipiciosi 
//1. declaration var, let, const
//2. assignment (= assignment operator)

let age = 18; //numbers
let firstName = "Ana-Maria"; //strings
let student = true; //booleans
 
age=age+1;


console.log("Hello", firstName);
console.log("You are ", age, "years old");
console.log("Enrolled:", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled:" + student;
*/

/*
let age = window.prompt("How old are you?");
age=Number(age);
age=age+1;

console.log("Happy Birthday! You are ", age, " years old");
*/

const answare = Math.floor(Math.random() * 20 + 1);
let guesses = 0;

document.getElementById("guessbutton").onclick = function(){
    
    let guess = document.getElementById("guessfield").value;
    guesses+=1;

    if(guess == answare)
    {
        alert(`Congratulations! The numer is ${answare} . It took you ${guesses} guesses`);
    }
    else if(guess < answare )
    {
        alert("Too small!");
    }
    else 
    {
        alert("Too large!");
    }
}