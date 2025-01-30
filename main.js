// Array of quotes
const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "The best way to predict the future is to invent it. - Alan Kay",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill"
];

function generateQuote(){
    const randomIndex = Math.floor( Math.random() * quotes.length);
    document.getElementById("quoteDisplay").textContent = quotes[randomIndex];
}

document.querySelector("#generate").addEventListener("click", generateQuote);


generateQuote();