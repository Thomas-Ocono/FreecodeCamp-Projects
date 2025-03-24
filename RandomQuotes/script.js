const quotes = [
  "Be yourself; everyone else is already taken.",
  "So many books, so little time.",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  "A room without books is like a body without a soul",
  "You only live once, but if you do it right, once is enough.",
];
const authors = [
  "Oscar Wilde",
  "Frank Zappa",
  "Albert Einstein",
  "Marcus Tullius Cicero",
  "Mae West",
];

const quoteText = document.getElementById("text");
const authorText = document.getElementById("author");
const quoteButton = document.getElementById("new-quote");

function getRandom() {
  return Math.floor(Math.random() * quotes.length);
}
let random = getRandom();
