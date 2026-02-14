// Task 1: Get the element with id "pokemonName" and add an event listener for "keydown"
// When the user presses "Enter" (event.key === "Enter"), call the fetchPokemon function
document
  .getElementById("pokemonName")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      fetchPokemon();
    }
  });

// Task 2: Create an async function called fetchPokemon
async function fetchPokemon() {

  // Task 3: Get the input element with id "pokemonName"
  const pokemonInput = document.getElementById("pokemonName");
  
  // Task 4: Get the value from the input, trim whitespace, and convert to lowercase
  const pokemonName = pokemonInput.value.trim().toLowerCase();

  // Task 5: Clear the input field after getting the value
  pokemonInput.value = "";
  
  // Task 6: Get the elements where you need to display the image and error message
  // Hints: Look for elements with ids "pokemonSprite" and "errorText"
  const pokemonImage = document.getElementById("pokemonSprite");
  const errorText = document.getElementById("errorText");

  // Task 7: Check if the input is empty
  // If it is, hide the image, show an error message "Please enter a Pokémon name"
  // and add the "text-danger" class to the error text
  if (pokemonName === "") {
    pokemonImage.style.display = "none";
    pokemonImage.src = "";
    errorText.textContent = "Please enter a Pokémon name";
    errorText.classList.add("text-danger");
    return;
  }

  // Task 8: Before making the fetch request:
  // - Remove the "text-danger" class from errorText
  // - Set the errorText to show "Loading ..."
  // - Hide the pokemonImage
  // - Clear the image src
  errorText.classList.remove("text-danger");
  errorText.textContent = "Loading ...";
  pokemonImage.style.display = "none";
  pokemonImage.src = "";

  // Task 9: Use a try-catch block for error handling
  try {
    // Task 10: Fetch data from the Pokemon API
    // Use template literal with the pokemonName to construct the URL:
    // https://pokeapi.co/api/v2/pokemon/${pokemonName}
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    // Task 11: Check if the response is ok (response.ok)
    // If not, throw an error with message "Pokemon not found ☹️"
    if (!response.ok) {
      throw new Error("Pokemon not found ☹️");
    }

    // Task 12: Convert the response to JSON using await
    const data = await response.json();
    
    // Task 13: Get the image URL from the data
    // Hint: Look for data.sprites.front_default
    const pokemonImageUrl = data.sprites.front_default;

    // Task 14: Set the image src to the URL and display it
    pokemonImage.src = pokemonImageUrl;
    pokemonImage.style.display = "block";
    
    // Task 15: Clear any error messages after successful fetch
    errorText.textContent = "";
  } catch (error) {
    // Task 16: In the catch block, handle errors:
    // - Log the error message to console
    // - Hide the pokemon image
    // - Add "text-danger" class to errorText
    // - Set the error message to display
    console.error("Error: ", error.message);
    pokemonImage.style.display = "none";
    errorText.classList.add("text-danger");
    errorText.textContent = error.message;
  }
}  