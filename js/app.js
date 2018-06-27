const deck = document.querySelector(".deck");
 // Create a list that holds all of your cards
/*const cardList = [
  "fa fa-diamond", "fa fa-diamond",
  "fa fa-paper-plane-o", "fa fa-paper-plane-o",
  "fa fa-anchor", "fa fa-anchor",
  "fa fa-bolt", "fa fa-bolt",
  "fa fa-cube", "fa fa-cube",
  "fa fa-leaf", "fa fa-leaf",
  "fa fa-bicycle" ,"fa fa-bicycle",
  "fa fa-bomb", "fa fa-bomb"
];*/


//Start the Game
let cardList= document.getElementsByClassName('card');
let cardArray=[];
//
  for(let i=0; i<=15; i++) {
    cardArray[i]=cardList.item(i);
    console.log(cardArray[i]);
  }
//}

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}






function startGame() {
 let shuffledCardList=shuffle(cardArray);
 console.log(shuffledCardList);

 for(let i=0; i<=15; i++) {
   deck.appendChild(shuffledCardList[i]);
   console.log(deck);
 }

}
startGame();
// Add open class when clicked
/*document.addEventListener('click', function () {
  const listElement = document.getElementsByClassName('card');
  for(let i=0; i<listElement.length; i++) {
    listElement[i].classList.add('open');
    console.log(listElement[i]);
  }
});*/
document.addEventListener('click', function (event) {
  event.target.classList.add('open', 'show');
});
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
