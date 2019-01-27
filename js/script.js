// Array of Quotes stored as Objects
let quotes = [
  {
      quote: "We are what we repeatedly do. Excellence, therefore, is not an act but a habit.",
      source: "Aristotle"
  },
  {
      quote: "Do not wait to strike till the iron is hot; but make it hot by striking.",
      source: "William B. Sprague"
  },
  {
      quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
      source: "Goethe"
  },
  {
      quote: "Great spirits have always encountered violent opposition from mediocre minds.",
      source: "Albert Einstein"
  },
  {
      quote: "You can get everything in life you want if you will just help enough other people get what they want.",
      source: "Zig Ziglar",
      year: 2001
  },
  {
      quote: "Whatever you do will be insignificant, but it is very important that you do it.",
      source: "Mahatma Gandhi"
  },
  {
      quote: "Vision without action is daydream. Action without vision is nightmare.",
      source: "Japanese Proverb"
  },
  {
      quote: "Success consists of doing the common things of life uncommonly well.",
      source: "Unknown",
      year: 1875
  }
];


// get Random Number function
function getRendomNumber(number) {
  return Math.floor((Math.random() * number));
}

// Printin the quotes function
function printQuote() {
  // getting div element, where we gonna insert our html
  let box = document.getElementById('quote-box')

  //getting random number(Which is a quotes length)
  let randomQuote = getRendomNumber(quotes.length);

  // creating a html variable.
  let html;

  //Assigning quote, source and year to a variable
  let quote = quotes[randomQuote].quote;
  let source = quotes[randomQuote].source;
  let year = quotes[randomQuote].year;
  
  // checking if qoutes has year
  if(year === undefined) {
    html = `
          <p class="quote">${quote}</p>
          <p class="source">${source}</p>
        `;
  }else {
    html = `
    <p class="quote">${quote}</p>
    <p class="source">${source}<span class="year">${year}</span></p>
  `;
  }
  // returning result inserting it into box div
  return box.innerHTML= html;
}

// updating quote on click event on "Show another quote" button
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

