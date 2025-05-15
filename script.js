let currentJokeIndex = 0;
const jokes = window.data.jokes.joke;

// Display the first joke on load
displayJoke(currentJokeIndex);

document.getElementById("fetch-joke-btn").addEventListener("click", () => {
  currentJokeIndex = (currentJokeIndex + 1) % jokes.length;
  displayJoke(currentJokeIndex);
});

function displayJoke(index) {
  const joke = jokes[index];
  document.getElementById("joke-setup").textContent = joke.setup;
  document.getElementById("joke-delivery").textContent = joke.delivery;
}
