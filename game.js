let userScore = 0;
let compScore = 0;

const imageOne= document.querySelectorAll(".image");
// const imaageBox = document.querySelector(".images");
const userscore = document.querySelector("#user_score");
const compscore = document.querySelector("#comp_score");
const messagePrint = document.querySelector("#print_one")

let playGame =(choiceId)=>{
    console.log("user choice  =",choiceId);
// message for clicking on images
  let compchoice = comChoice();
    console.log("computer choice =",compchoice);

    if(choiceId === compchoice)
    {
        //    drawMatch();
           console.log("match draw");
           messagePrint.innerText = "match draw";
    }
    else if(
        (choiceId === "rock" && compchoice === "scissor") || ( choiceId === "paper" && compchoice === "rock" ) || ( choiceId === "scissor" && compchoice === "paper"))
        {
        //    userWin();
           console.log("user won",choiceId);
           userScore++
            let newScore = userScore;
           userscore.innerText = newScore;
           messagePrint.innerText = "user won the match";
           
    }
    else {
// compWin()
       console.log("comp win",compchoice);
       compScore++;
        let newCompScore = compScore;
        compscore.innerText = newCompScore;
        messagePrint.innerText = "computer won the match";
    }
}

// function for the  user choice one 
// 1))))))))))) 1st step to while clicking what will happen
 imageOne.forEach((image) => {
    image.addEventListener("click",()=>{
        let choiceId = image.getAttribute("id");
        console.log(choiceId);
        playGame(choiceId);
        
    })
 }); 


//  for the computer chance to choose
// 2))))))))) second to select the computer choices
let comChoice = ()=>{
    let choices = ["rock","paper","scissor"];
    let x = choices.length;
    let randomInx = Math.floor(Math.random()*x);
    return choices[randomInx];
}


// 3))))))))))))))) here we have written that here we have chosen the choices not its time to compare for the winner

