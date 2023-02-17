const backCards = document.querySelectorAll('img.back-face');
const cards = document.querySelectorAll('img');
const frontCards = document.querySelectorAll('img.front-face');
const memoryCards = document.querySelectorAll('.Memory-card');
const newGame = document.querySelector('button');

let counter = 0;
let firstSelection= '';
let secondSelection= '';

memoryCards.forEach(function(memoryCard){
  backCards.forEach(function(backCard){
    backCard.addEventListener('click', function(e){
      e.target.classList.add('flip');
    });
  });
  memoryCard.addEventListener('click', function(e){
    if (memoryCard.classList.contains('checked') || memoryCard.classList.contains('clicked')) return;
    memoryCard.classList.add('clicked');
    if (counter === 0) {
      firstSelection = memoryCard.getAttribute('char');
      counter++;
    } else {
      secondSelection = memoryCard.getAttribute('char');
      counter = 0;
   
      if (firstSelection === secondSelection) {
        const correctCards = document.querySelectorAll (
        ".Memory-card[char='" + firstSelection + "']"
        );
        correctCards[0].classList.add("checked"); 
        correctCards[0].classList.remove("clicked"); 
        correctCards[1].classList.add("checked");
        correctCards[1].classList.remove("clicked"); 
      } else if (firstSelection !== secondSelection) {
        const allCards = document.querySelectorAll('.Memory-card.clicked');
        allCards.forEach(function(card){
          if (!card.classList.contains("checked")) {
           setTimeout(function(){
            card.classList.add("unflip");
           },2000)
          }
        });
        setTimeout(function(){
          allCards.forEach(function(card){
            if (!card.classList.contains("checked")) {
              card.classList.remove('clicked');
              card.classList.remove('unflip');
            }
            cards.forEach(function(img){
              if (!img.parentNode.classList.contains("checked")) {
                img.classList.remove('flip');
              }
            });
          });
        }, 2000);
      }
      
      
    }
  });
});

const newGameButton = document.querySelector('.new-game');

newGameButton.addEventListener('click', function() {
  location.reload();
});








    