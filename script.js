document.getElementById("fetch-joke-btn").addEventListener("click", fetchJoke);

function fetchJoke() {
  const url = "https://v2.jokeapi.dev/joke/Any";
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Check if the joke is a two-part joke
      if (data.type === "twopart") {
        document.getElementById("joke-setup").textContent = data.setup;
        document.getElementById("joke-delivery").textContent = data.delivery;
      } else {
        // Handle single-part jokes if needed
        document.getElementById("joke-setup").textContent = data.joke;
        document.getElementById("joke-delivery").textContent = "";
      }
    })
    .catch(error => {
      console.error("Error fetching joke:", error);
      document.getElementById("joke-setup").textContent = "Sorry, couldn't fetch a joke. Please try again!";
      document.getElementById("joke-delivery").textContent = "";
    });
}
