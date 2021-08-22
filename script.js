   const cellElement = document.querySelectorAll("#data-cell");
   const winningCases = [
     [0, 1, 2],
     [3, 4, 5],
     [6, 7, 8],
     [0, 3, 6],
     [1, 4, 7],
     [2, 5, 8],
     [0, 4, 8],
     [2, 4, 6],
   ];
   let circleTurn;
   let winningPopup = document.querySelector(".winning-message");
   let restartButton = document.querySelector("#restartButton");
   
   cellElement.forEach((cell) => {
     cell.addEventListener("click", handleClick, { one: true });
   });
   
   function handleClick(e) {
     //Asign the mark
     const cell = e.target;
     const currentClass = circleTurn ? "o" : "x";
     placeMark(cell, currentClass);
   
     //Check for winner
     if (checkWinner(currentClass)) {
       function showResult(currentClass) {
         if ((currentClass = "o")) {
           winningPopup.innerText = "Your the Winner";
         } else if ((currentClass = "x")) {
           winningPopup.innerText = "Computer Wins";
         } else {
           winningPopup.innerText = "No Winners!";
         }
         winningPopup.style.display = "flex";
         restartButton.style.display = "flex";
       }
     }
   
     //Switch turns
     function switchTurns() {
       circleTurn = !circleTurn;
     }
   
     //calling Switch Turns function
     switchTurns();
   
     //calling Show results function
     showResult();
   }
   
   // Place X or O mark when the user click at a cell
   function placeMark(cell, currentClass) {
     cell.classList.add(currentClass);
   }
   
   // Check who is the winner is O or X
   function checkWinner(currentClass) {
     return winningCases.some((cases) => {
       return cases.every((index) => {
         return cellElement[index].classList.contains(currentClass);
       });
     });
   }
   