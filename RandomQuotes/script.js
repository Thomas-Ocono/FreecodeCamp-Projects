const text = document.getElementById("text");
const author = document.getElementById("author");
const tweet = document.getElementById("tweet-quote");
const newQuote = document.getElementById("new-quote");
const quotes = [
  [
    "Life isn't about getting and having, it's about giving and being.",
    "Kevin Kruse",
  ],
  [
    "Whatever the mind of man can conceive and believe, it can achieve.",
    "Napoleon Hill",
  ],
  ["Strive not to be a success, but rather to be of value.", "Albert Einstein"],
  [
    "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
    "Robert Frost",
  ],
  [
    "I attribute my success to this: I never gave or took any excuse.",
    "Florence Nightinggale",
  ],
];

randomQuote = Math.floor(Math.random() * quotes.length);
console.log(randomQuote);

function updateQuote(rando) {
  text.innerText = quotes[rando][0];
  author.innerText = quotes[rando][1];
}
function convertToTwitter(random) {
  quote = quotes[random][0];
  twitterQuote = quote.replace(/\s/g, "%20");
  console.log(twitterQuote);
  return twitterQuote;
}
tweet.href =
  "https://twitter.com/intent/tweet?text=" +
  convertToTwitter(randomQuote) +
  " - " +
  quotes[randomQuote][1];

updateQuote(randomQuote);
convertToTwitter(randomQuote);

newQuote.addEventListener("click", () => {
  prevRandom = randomQuote;
  while (randomQuote == prevRandom) {
    randomQuote = Math.floor(Math.random() * quotes.length);
  }
  updateQuote(randomQuote);
  tweet.href =
    "https://twitter.com/intent/tweet?text=" +
    convertToTwitter(randomQuote) +
    " - " +
    quotes[randomQuote][1];
});
