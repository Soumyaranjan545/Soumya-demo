const max = prompt("Enter the max number");
const random = Math.floor(Math.random() * max)+1;
let guess = prompt("guess the number");
while(true){
    if(guess == "soumya"){
        console.log("user soumya");
        break;
    }
    if(guess == random){
        console.log("you are right congrats random number was " , random);
        break;
    }else if(guess < random){
        guess = prompt("your guess was too small. please try again");
    }else{
        guess = prompt("your guess too large please try again");
    }
}