// Math Object Example
document.getElementById('generate-number').addEventListener('click', function() {
    let randomNumber = Math.floor(Math.random() * 100); // Random number between 0 and 100
    document.getElementById('random-number').textContent = randomNumber;
});

// Date Object Example
function refreshDate() {
    let currentDate = new Date();
    document.getElementById('current-date').textContent = currentDate.toLocaleString();
}

document.getElementById('refresh-date').addEventListener('click', refreshDate);

// DOM Manipulation Example (Selectors)
document.getElementById('greet-button').addEventListener('click', function() {
    let nameInput = document.getElementById('name-input').value;
    let greetingMessage = 'Hello, ' + nameInput + '!';
    document.getElementById('greeting-message').textContent = greetingMessage;
});

// Automatically load the current date on page load
window.onload = refreshDate;
