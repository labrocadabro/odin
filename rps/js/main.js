let options = document.querySelectorAll('#options figure');
options.forEach(opt => {
   opt.addEventListener("mouseover", (e) => e.currentTarget.style.color = "#000");
   opt.addEventListener("mouseout", (e) => e.currentTarget.style.color = "#aaa");
   opt.addEventListener("click", result, { once: true });
});

function result(e) {
   let chosen = e.currentTarget;
   let sibling = chosen.parentNode.parentNode.setAttribute("id", "done");
   document.querySelector("#result").setAttribute("class", "display");
   document.querySelector("#player").appendChild(chosen.cloneNode(true));
   let aiChoice = aiChoose();
   document.querySelector("#ai").appendChild(aiChoice);
   const WINNER = {
      'rock': 'paper',
      'paper': 'scissors',
      'scissors': 'rock'
   }
   let winnerText = ""
   if (aiChoice.className === e.currentTarget.className) {
      winnerText = "It was a tie!"
   } else if (aiChoice.className === WINNER[e.currentTarget.className]) {
      winnerText = "I won!"
   } else {
      winnerText = "You won!"
   }
   document.querySelector("#winner h3").innerText = winnerText;
}

function aiChoose() {
   const CHOICES = {
      1: "rock",
      2: "paper",
      3: "scissors"
   }
   let choiceNum = Math.floor(Math.random() * 3) + 1;
   return document.getElementsByClassName(CHOICES[choiceNum])[0].cloneNode(true);
}