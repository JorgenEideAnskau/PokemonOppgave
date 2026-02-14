document.getElementById("pokemonName").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    fetchPokemon();
  }
});

async function fetchPokemon() {
  // Getting the elements
  const input = document.getElementById("pokemonName");
  const name = input.value.trim().toLowerCase();
  const image = document.getElementById("pokemonSprite");
  const error = document.getElementById("errorText");

  //Resetting the UI
  input.value = "";
  image.src = "";
  image.style.display = "none";

  //Validate Input
  if (!name) {
    error.textContent = "Please enter a Pokémon name";
    error.classList.add("text-danger");
    return;
  }

  //Loading state
  error.classList.remove("text-danger");
  error.textContent = "Loading ...";

  //Fetching PokéAPI
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!response.ok) throw new Error("Pokemon not found 😔");

    const data = await response.json();
    image.src = data.sprites.front_default;
    image.style.display = "block";
    error.textContent = "";
  } catch (err) {
    error.classList.add("text-danger");
    error.textContent = err.message;
  }
}
