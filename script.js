// Define an array of positive quotes
const quotes = [
    "Every day may not be good, but there's something good in every day.",
    "Believe you can and you're halfway there.",
    "Rubab, You are capable of more than you know.",
    "You are stronger than you think.",
    "Every accomplishment starts with the decision to try.",
    "Difficult roads often lead to beautiful destinations.",
    "You are amazing just the way you are.",
    "The best is yet to come.",
    "Always remember rubab that You are loved.",
    " Things may seem distant and bleak but keep going. You're getting there."
];

// Function to generate a random quote and display it
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = quotes[randomIndex];
}
