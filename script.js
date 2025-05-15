// Fetch the jokes from the jokes.json file
fetch('https://pruthviraj-guddu.github.io/joke-api-simulator/api/jokes.json')
  .then(response => response.json())
  .then(data => {
    // Show the first joke when the page loads
    displayRandomJoke(data.jokes.joke);
    
    // Add button click event to show a new random joke
    document.getElementById("fetch-joke-btn").addEventListener("click", () => {
      displayRandomJoke(data.jokes.joke);
    });
  })
  .catch(error => {
    console.error('Error fetching jokes:', error);
  });

// Function to select and display a random joke
function displayRandomJoke(jokes) {
  // Get a random index
  const randomIndex = Math.floor(Math.random() * jokes.length);
  const joke = jokes[randomIndex];
  
  // Display the joke
  document.getElementById("joke-setup").textContent = joke.setup;
  document.getElementById("joke-delivery").textContent = joke.delivery;
}
