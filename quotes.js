const quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote: "So many books, so little time.",
    author: "Frank Zappa",
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },
  {
    quote: "Don’t walk in front of me… I may not follow. Don’t walk behind me… I may not lead. Walk beside me… just be my friend",
    author: "Albert Camus",
  },
  {
    quote: "A half-truth is the most cowardly of lies.",
    author: "Mark Twain",
  },
  {
    quote: "It is better to be hated for what you are than to be loved for what you are not.",
    author: "Andre Gide",
  },
  {
    quote: "Love all, trust a few, do wrong to none.",
    author: "William Shakespeare",
  },
  {
    quote: "Some day you will be old enough to start reading fairy tales again.",
    author: "C.S. Lewis",
  },
  {
    quote: "But better to get hurt by the truth than comforted with a lie.",
    author: "Khaled Hosseini",
  },
  {
    quote: "We believe in ordinary acts of bravery, in the courage that drives one person to stand up for another.",
    author: "Veronica Roth",
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;