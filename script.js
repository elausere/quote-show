/* Data to Show*/
const data = [
  {
   quote: `Shut Up And Take My Money!`, 
   emoji: '<img src=assets/takeMyMoney.jpeg>', 
   image: `url(assets/money.jpeg)`
  }, 
  {
   quote: `Evil Kermit`, 
   emoji: '<img src=assets/evilKermit.jpeg>', 
   image: `url(assets/kermitPattern.jpeg)`
  },  
  {
   quote: `Distracted Boyfriend`, 
   emoji: '<img src=assets/distractedBoyfriend.jpeg>' , 
   image: `url(assets/hearts.jpeg)`
  },
  {
  quote: `This is Fine`,
  emoji: '<img src=assets/fine.jpeg>',
  image: `url(assets/fire.jpeg)`
  },
  {
  quote: `Change My Mind`,
  emoji: `<img src=assets/myMind.jpeg>`,
  image: `url(assets/parkTicket.jpeg)`
  },
  {
  quote: `EXIT 12`,
  emoji: `<img src=assets/exitCar.jpeg>`,
  image: `url(assets/compPattern.png)`
  },
  {
  quote: `Crying Michael Jordan`,
  emoji: `<img src=assets/cryingMichael.jpeg>`,
  image:`url(assets/basketball.jpeg)`
  },
  {
  quote: `Drake Hotline Bling`,
  emoji: `<img src=assets/drake.jpeg>`,
  image:`url(assets/hotlineBling.png)`
  },
  {
  quote: `Buff Doge vs Cheems`,
  emoji: `<img src=assets/doge.jpeg>`,
  image:`url(assets/dogePattern.jpeg)`
  },
  {
  quote: `Woman Yelling at Cat`,
  emoji: `<img src=assets/yellingCat.jpeg>`,
  image:`url(assets/covid.jpeg)`
  },
  {
  quote: `Imagine a World`,
  emoji: `<img src=assets/imagineWorld.jpeg>`,
  image:`url(assets/toystory.jpeg)`
  },
  {
  quote: `Oh Yeah! Oh No...`,
  emoji: `<img src=assets/ohno.jpeg>`,
  image:`url(assets/code2.jpeg)`
  },
];

/*
Quote and Emoji
*/
// blockquote
const quote = document.querySelector('blockquote');
// emoji
const emoji = document.querySelector('p');
// background
const bgImage = document.querySelector('body');

// Check-Check: change text
quote.innerHTML = "Random Famous Meme Generator";
// Check-Check: change emoji text
emoji.innerHTML = "🤪";
// Check-Check: background image
bgImage.style.backgroundImage= 'url(/assets/grumpycat.jpeg)';

/*
 * Navigate to Items with Event Listeners
 * Track Number of Items
*/
// initialize item number
let itemNumber = 0;
// get next button
const nextButton = document.querySelector("img.next");
// get previous button
const prevButton = document.querySelector("img.prev");
// get random button
const randButton = document.querySelector("img.random");

// listen for clicks on next button
nextButton.addEventListener("click", function () {
  // update, then increase item number with each click
  itemNumber = itemNumber + 1;
  
  // if at LAST item
  if ( itemNumber > data.length -1 ) {
    // reset counting to first item
    itemNumber = 0;
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
  
});
  
// listen for clicks on previous button
prevButton.addEventListener("click", function () {
  // update, then DEcrease item number with each click
  itemNumber = itemNumber - 1;
  
  // if at FIRST item
  if ( itemNumber < 0 ) {
    // reset counting to last item
    itemNumber = data.length -1;
  }  
  
  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
});

// listen for clicks on random button
randButton.addEventListener('click', function() {
  
  // generate random number, for total number, of items (data)
  randomNumber = Math.floor ( Math.random() * data.length );
  
  // display data based random number
  quote.innerHTML = data[randomNumber].quote;
  emoji.innerHTML = data[randomNumber].emoji;
  bgImage.style.backgroundImage = data[randomNumber].image;
  
});

// listen for keypress next
document.addEventListener('keyup', function(){
  
  // Next Right Arrow  
  if ( event.keyCode === 39 ) {
   
   // update, then increase item number with each click
  itemNumber = itemNumber + 1;
  
  // if at LAST item
  if ( itemNumber > data.length -1 ) {
    // reset counting to first item
    itemNumber = 0;
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
    
  }
  
  // Prev Left Arrow
  if ( event.keyCode === 37 ) {
  
   // update, then DEcrease item number with each click
  itemNumber = itemNumber - 1;
  
  // if at FIRST item
  if ( itemNumber < 0 ) {
    // reset counting to last item
    itemNumber = data.length -1;
  }  
  
  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
  }
  
  // Random Spacebar
  if ( event.keyCode === 32) {
    
    // generate random number, for total number, of items (data)
    randomNumber = Math.floor ( Math.random() * data.length );

    // display data based random number
    quote.innerHTML = data[randomNumber].quote;
    emoji.innerHTML = data[randomNumber].emoji;
    bgImage.style.backgroundImage = data[randomNumber].image;
  
  }
  
});