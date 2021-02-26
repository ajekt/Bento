// Get the hour
const today = new Date();
const hour = today.getHours();

// Here you can change your name
// const name = ' John Doe';

// Here you can change your greetings
const greetings = ['Go to Sleep!  ', 'Good morning!  ', 'Good afternoon  ', 'Good Evening  '];

// Define the hours of the greetings
if (hour >= 23 && hour < 5) document.getElementById('greetings').innerText = greetings[0]; else
if (hour >= 6 && hour < 12) document.getElementById('greetings').innerText = greetings[1]; else
if (hour >= 12 && hour < 17) document.getElementById('greetings').innerText = greetings[2]; else
document.getElementById('greetings').innerText = greetings[3];
