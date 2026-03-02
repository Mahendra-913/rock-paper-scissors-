

// ===== CGPT ADVANCED ELEMENTS =====
const cgptUserImg = document.querySelector("#cgpt-user-img");
const cgptCompImg = document.querySelector("#cgpt-comp-img");
const cgptBlast = document.querySelector("#cgpt-blast");
const cgptResult = document.querySelector("#cgpt-result");








let userScore=0;
let compScore=0;

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");



const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");


const genCompChoice = () => {
const options=["rock","paper","scissor"];
const randIdx=Math.floor(Math.random()*3 );//it will give 0 to 2
return options[randIdx];

}


const drawGame = () =>
    {
        msg.innerText="Game was draw!Play again";
    msg.style.backgroundColor="gray";
        
    } 
const showWinner =(userWin , userChoice , compChoice)=>{
if(userWin===true)
    {
        userScore++;
        userScorePara.innerText=userScore;
         msg.innerText= `YOU Win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
        
        
        
    }
    else
        {
        compScore++;
        computerScorePara.innerText=compScore ;
   

        msg.innerText=`You Lose.${compChoice} beats your ${userChoice}`;

    msg.style.backgroundColor="tomato";
    
    }



    };

// const playGame= (userChoice)=>
// {
// console.log("user choice=",userChoice);
// //generate computer choice; using moduler programming 
// const compChoice=genCompChoice();
// console.log("computer choice=",compChoice);
// if(userChoice === compChoice)
// {
//     drawGame();
// }
// else{

// let userWin=true;
// if(userChoice==="rock")
// {
//     //scissor , paper
//     userWin=compChoice==="paper" ?false:true;  
// }
// else if(userChoice==="paper")
// {
//     //rock ,scissor
//     userWin=compChoice==="scissor"?false:true;
// }
// else
// {
//     //rock , paper  
//   userWin=compChoice==="rock"?false:true;
// }
// showWinner(userWin , userChoice , compChoice);
// }
// };

















//<!-- ===== CGPT ADVANCED BATTLE ARENA ===== -->


// const playGame = (userChoice) => {

//     const compChoice = genCompChoice();

//     // ===== CGPT IMAGE SET =====
//     cgptUserImg.src = `${userChoice}.png`;
//     cgptCompImg.src = `${compChoice}.png`;

//     // reset positions
//     cgptUserImg.classList.remove("active");
//     cgptCompImg.classList.remove("active");

//     void cgptUserImg.offsetWidth; // reflow trick

//     cgptUserImg.classList.add("active");
//     cgptCompImg.classList.add("active");

//     setTimeout(() => {
//         cgptBlast.classList.add("active");
//     }, 500);

//     setTimeout(() => {

//         if (userChoice === compChoice) {
//             drawGame();
//         } else {

//             let userWin = true;

//             if (userChoice === "rock") {
//                 userWin = compChoice === "paper" ? false : true;
//             }
//             else if (userChoice === "paper") {
//                 userWin = compChoice === "scissor" ? false : true;
//             }
//             else {
//                 userWin = compChoice === "rock" ? false : true;
//             }

//             showWinner(userWin, userChoice, compChoice);
//         }

//         cgptBlast.classList.remove("active");

//     }, 900);
// };











const playGame = (userChoice) => {

    const compChoice = genCompChoice();

    // RESET STATE EVERY TIME
    cgptUserImg.classList.remove("active");
    cgptCompImg.classList.remove("active");
    cgptBlast.classList.remove("active");
    cgptResult.style.opacity = 0;

    cgptUserImg.src = `${userChoice}.png`;
    cgptCompImg.src = `${compChoice}.png`;

    void cgptUserImg.offsetWidth; // force reflow

    // START SLIDE
    cgptUserImg.classList.add("active");
    cgptCompImg.classList.add("active");

    // BLAST AFTER COLLISION
    setTimeout(() => {
        cgptBlast.classList.add("active");
    }, 100);

    // AFTER 2 SECONDS REMOVE IMAGES & SHOW RESULT
    setTimeout(() => {

        let resultText = "";
        let userWin = true;

        if (userChoice === compChoice) {
            resultText = "DRAW Game! Play Again";
            cgptResult.style.color="gray";
        } else {

            if (userChoice === "rock") {
                userWin = compChoice === "paper" ? false : true;
            }
            else if (userChoice === "paper") {
                userWin = compChoice === "scissor" ? false : true;
            }
            else {
                userWin = compChoice === "rock" ? false : true;
            }

            if (userWin) {
                userScore++;
                userScorePara.innerText = userScore;
                resultText = `YOU Win! your ${userChoice} beats ${compChoice}`;
                 cgptResult.style.color="green";
  
            } else {
                compScore++;
                computerScorePara.innerText = compScore;
                resultText = `You Lose.${compChoice} beats your ${userChoice}`;
            cgptResult.style.color="tomato";
            }
        }

        // Hide images
        cgptUserImg.classList.remove("active");
        cgptCompImg.classList.remove("active");

        // Show result in battle area
        cgptResult.innerText = resultText;
        cgptResult.style.opacity = 1;

    }, 2000);
};
































choices.forEach((choice) =>{
    // console.log(choice);
choice.addEventListener("click",()=>{
const userChoice=choice.getAttribute("id");
playGame(userChoice);
});

} );