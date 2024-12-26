
window.addEventListener('load', () => {
    if (window.playerNames) {
      const player1Name = window.playerNames.player1;
      const player2Name = window.playerNames.player2;
      const player1Element = document.querySelector('.col-md-4.col-6:nth-child(1) p');
      const player2Element = document.querySelector('.col-md-4.col-6:nth-child(2) p');
      if (player1Element) {
        player1Element.textContent = player1Name || 'Player 1';
      }
      if (player2Element) {
        player2Element.textContent = player2Name || 'Player 2';
      }
    }
  });


document.getElementById("playButton").addEventListener("click", function () {
    // Show "Rolling..." message
    document.querySelector("h1").innerHTML = "Rolling...";
  
    
  
    // Add rolling animation
    document.querySelector(".img1").classList.add("roll");
    document.querySelector(".img2").classList.add("roll");
  
    // Simulate rolling delay
    setTimeout(() => {
      // Remove animation classes
      document.querySelector(".img1").classList.remove("roll");
      document.querySelector(".img2").classList.remove("roll");
  
      // Generate random numbers for dice
      var randomNumber1 = Math.floor(Math.random() * 6) + 1;
      var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  
      // Update dice images
      var images1 = "./images/dice" + randomNumber1 + ".png";
      var images2 = "./images/dice" + randomNumber2 + ".png";
      document.querySelector(".img1").setAttribute("src", images1);
      document.querySelector(".img2").setAttribute("src", images2);
  
      // Determine and display the winner
      if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = player1Name+ " Wins! 🎉";
      } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = player2Name + " Wins! 🎉";
      } else {
        document.querySelector("h1").innerHTML = "It's a Draw! 🤝";
      }
    }, 1000); // Delay for dice roll animation
  });
  