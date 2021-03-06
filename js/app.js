let clickCounter = 0;
let openCardsList = [];
let moves = 0;
let star = 3;
let time;
let min = 0;
let s = 0;
let startedGame = false;

let deck = document.querySelector('.deck');

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

//Get list elements from html
let cardList= document.getElementsByClassName('card');
let cardArray=[];

for(let i=0; i<=15; i++) {
  cardArray[i]=cardList.item(i);
}

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

function showCard (card) {
  card.classList.add('open', 'show', 'disable');
  clickCounter += 1;
}

function matchCard () {
  openCardsList[0].classList.add('match');
  openCardsList[1].classList.add('match');
  openCardsList = [];
}

function differentCard () {
  setTimeout(function() {
    openCardsList[0].classList.remove('open', 'show', 'disable');
    openCardsList[1].classList.remove('open', 'show', 'disable');
    openCardsList = [];
  }, 800)
}

// Win if all card are open
function winGame (card) {
  if (document.getElementsByClassName('match').length == 16){
    document.querySelector('.win').style.cssText = 'z-index: 1;';
    document.querySelector('.score').innerHTML = 'whitin ' + min +':' + s + ' and with ' + star + ' <i class="fa fa-star"></i>';
    clearInterval(time);
  }
}

function timer() {
  time = setInterval( function () {
    s++;
    if (s == 60) {
      min++;
      s = 0;
    }
    document.querySelector('.timer').textContent = 'Time: ' + min +':' + s;
  }, 1000)
}

// Initialize the game
function initGame() {
  openCardsList = [];
  startedGame = false;
  document.querySelector('.win').style.cssText = 'z-index: -1;';

  //Add schuffled cards to HTML
  let shuffledCardList=shuffle(cardArray);
  for(let i=0; i<=15; i++) {
    deck.appendChild(shuffledCardList[i]);
    shuffledCardList[i].classList.remove('open', 'show', 'match', 'disable');
  }

  moves = 0;
  document.querySelector('.moves').innerHTML = 0;

  clearInterval(time);
  min = 0;
  s = 0;
  document.querySelector('.timer').innerHTML = 'Time: 00:00';
  document.querySelector('.stars').innerHTML = '<li><i class="fa fa-star"></i></li> <li><i class="fa fa-star"></i></li> <li><i class="fa fa-star"></i></li>';
}

//Reload the game
document.querySelector('.restart').addEventListener('click', initGame);
document.querySelector('.again').addEventListener('click', initGame);

deck.addEventListener('click', function (event) {
  let card = event.target;
  //Drop every event which is not a card
  if (event.target.classList.contains('card')) {
    //Start timer
    if(!startedGame){
      timer();
      startedGame = true;
    }

    //Add clicked cards to a list
    if (!card.classList.contains('match')) {
      if (openCardsList.length < 2){
        showCard(card);
        openCardsList.push(card);
      }

      //Check clicked cards if match
      if(openCardsList.length > 1){
        if(openCardsList[0].innerHTML === openCardsList[1].innerHTML){
          matchCard();
        }
        else {
          differentCard();
        }

        //Incrementing moves
        moves++;
        document.querySelector('.moves').innerText = moves;
        console.log(moves);

        //Rating
        if (moves/5 === 2 || moves/5 === 3 || moves/5 === 4) {
          document.querySelector('.fa-star').remove();
          star = 4-moves/5;
        }
      }
    }
  }

  winGame(card);
});

initGame();

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
