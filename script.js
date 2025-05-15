let jokes = window.data.jokes.joke;
let currentJokeIndex = 0;

displayJoke(currentJokeIndex);

// When the button is clicked, show the next joke
document.getElementById("fetch-joke-btn").addEventListener("click", () => {
  currentJokeIndex = (currentJokeIndex + 1) % jokes.length;
  displayJoke(currentJokeIndex);
});

function displayJoke(index) {
  const joke = jokes[index];
  document.getElementById("joke-setup").textContent = joke.setup;
  document.getElementById("joke-delivery").textContent = joke.delivery;
}
