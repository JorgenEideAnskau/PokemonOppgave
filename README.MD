# Pokémon Sprite Fetcher

Build a small web app that fetches Pokémon data from the [PokéAPI](https://pokeapi.co/) and displays the Pokémon's sprite image.

## Skills You'll Practice
- addEventListener and DOM manipulation
- async/await syntax
- The Fetch API and handling HTTP responses
- Error handling with try/catch

## HTML Elements to Work With
Take a look at the HTML file to familiarize yourself with these elements:
- `<input id="pokemonName">` — user input field
- `<button>` — calls `fetchPokemon()` on click (already set up in HTML)
- `<img id="pokemonSprite">` — displays the sprite (hidden by default)
- `<p id="errorText">` — displays error/status messages

---

## Task 1: Event Listener
The button in the HTML already calls `fetchPokemon()` on click.
But we also want the search to trigger when the user presses **Enter**
in the input field — this is a common UX pattern.

**TODO:**
1. Use `document.getElementById()` to select the element with id `pokemonName`
2. Call `.addEventListener()` on it with the event type `"keydown"`
3. The listener takes a callback function with an event parameter (e.g. `e`)
4. Inside the callback, check if `e.key === "Enter"`
5. If true, call `fetchPokemon()`

---

## Task 2: Create fetchPokemon Function
Fetching data from an API is asynchronous — the browser sends a request
and has to wait for the server to respond. By marking a function as `async`,
we can use the `await` keyword inside it to pause execution until a Promise resolves.

**TODO:**
1. Declare a function called `fetchPokemon`
2. Add the `async` keyword before the function declaration
   - Hint: `async function myFunction() { ... }`
3. Inside the function, create four variables using `const`:
   - `input` — get the input element (id: `pokemonName`)
   - `name` — read `input.value`, then apply `.trim()` and `.toLowerCase()`
   - `image` — get the image element (id: `pokemonSprite`)
   - `error` — get the error text element (id: `errorText`)

---

## Task 3: Reset the UI
Every time the function runs, we should start with a clean state.

**TODO:**
1. Clear the input field by setting `input.value` to `""`
2. Clear the image by setting `image.src` to `""`
3. Hide the image by setting `image.style.display` to `"none"`

---

## Task 4: Validate Input
If the user submitted an empty string, we should not make an API call.

**TODO:**
1. Write an if-statement that checks if `name` is falsy (empty)
   - Hint: `if (!name)`
2. If it is empty, do the following inside the if-block:
   - Set `error.textContent` to `"Please enter a Pokémon name"`
   - Add the CSS class `"text-danger"` to the error element using `.classList.add()`
   - Use `return` to exit the function early so no API call is made

---

## Task 5: Set Loading State
Before we make the API call, we should give the user visual feedback
that something is happening. This is important because network requests can take time.

**TODO:**
1. Remove the `"text-danger"` class from the error element using `.classList.remove()`
   - This clears any red styling from a previous failed search
2. Set `error.textContent` to `"Loading ..."`

---

## Task 6: Fetch from PokéAPI
The PokéAPI endpoint for looking up a Pokémon by name is:
```
https://pokeapi.co/api/v2/pokemon/{name}
```

`fetch()` returns a Promise that resolves to a Response object.
We use `await` to wait for it instead of chaining `.then()` calls.

We wrap everything in a `try/catch` block so that if anything goes wrong
(network error, invalid name, etc.) we can handle it gracefully instead of crashing.

### Inside `try { }`:

**TODO:**
1. Open a `try { }` block
2. Use `fetch()` to send a request to the PokéAPI URL
   - Use a template literal to insert the Pokémon name into the URL
   - Hint: `` `https://pokeapi.co/api/v2/pokemon/${name}` ``
3. Add `await` before `fetch()` to wait for the response
4. Store the result in a `const` called `response`

> **Important:** `fetch()` does **NOT** throw an error for HTTP error status codes
> like 404 (Not Found). You must check the response yourself!

5. Check if `response.ok` is **not** true
   - If not ok, throw a new Error: `throw new Error("Pokemon not found ☹️")`
6. The response body is JSON but needs to be parsed first
   - Call `response.json()` with `await` in front of it
   - Store the result in a `const` called `data`
7. Set `image.src` to `data.sprites.front_default`
8. Set `image.style.display` to `"block"` to make it visible
9. Clear the error text by setting `error.textContent` to `""`

### Inside `catch (err) { }`:

**TODO:**
1. Add a `catch (err) { }` block right after the try block
2. Add the `"text-danger"` class to the error element using `.classList.add()`
3. Display the error message by setting `error.textContent` to `err.message`
