// 1. Trigger on "Enter"
document.getElementById("pokemonName").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    fetchPokemon();
  }
});

// 2. Created the fetchPokemon() function
async function fetchPokemon() {
  // Grabbed the elements
  const input = document.getElementById("pokemonName");
  const name = input.value.trim();
  const image = document.getElementById("pokemonSprite");
  const error = document.getElementById("errorText");

  // 3. Resetting the UI
  input.value = "";
  image.scr = "";
  image.style.display = "none";

  // 4. Validating input
  if (!name) {
    error.textContent = "Please enter a Pokemon name!";
    error.classList.add("text-danger");
    return;
  }

  // 6. Loading state
  error.classList.remove("text-danger");
  error.textContent = "Loading ...";

  // 5. Fetching and displaying Pokemon
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!response.ok) throw new Error("Pokemon not found 😔 ");

    const data = await response.json();
    image.src = data.sprites.front_default;
    image.style.display = "block";
    error.textContent = "";
    
  } catch (err) {

    error.classList.add("text-danger");
    error.textContent = err.message;
  }
}
