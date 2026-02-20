# Pokémon Sprite Fetcher

Your task is to write the JavaScript for a small web app that fetches Pokémon data from the [PokéAPI](https://pokeapi.co/) and displays the Pokémon's sprite image.

The HTML and CSS are already written for you. **Read through both files before you start** — understanding the existing structure and class names will make things easier.

---

## The API

The endpoint you'll need looks like this:
```
https://pokeapi.co/api/v2/pokemon/{name}
```

Browse the [PokéAPI documentation](https://pokeapi.co/) to explore what the response looks like. You'll need to figure out where in the response object the sprite image URL is stored — try fetching a Pokémon in your browser first.

> **Note:** `fetch()` does **not** throw an error when a Pokémon isn't found (HTTP 404). You'll need to check the response yourself and handle that case manually.

---

## What the app should do

Work through these steps in order — each one builds on the previous.

### 1. Trigger the search on Enter
The button already calls `fetchPokemon()` when clicked. Add a second way to trigger it: pressing **Enter** while the input field is focused. Look into `addEventListener` and keyboard events — you'll want to check which key was pressed using `event.key`.

### 2. Write the `fetchPokemon` function
This function needs to be `async` because it will do network requests.

Start by grabbing the three relevant HTML elements:
1. text input
2. where the image should be placed
3. and the error paragraph

Then store them in variables. Also read and clean up the input value before using it — think about whitespace and upper and lower casing.

> **Note:** Store a reference to the input **element** itself, not just its value — you will need it again later.

> **All the remaining logic (steps 3–6) should live inside this function.**

### 3. Reset the UI
Before doing anything else, reset the page to a clean state. Think about what was shown from a previous search that shouldn't carry over — such as the text in the input field, any error message from a previous failed search, and the previously displayed image.

### 4. Validate the input
If the user didn't type anything, don't make an API call. Show an appropriate message and stop the function early. There's already a CSS class in the stylesheet for styling error messages — use it.

### 5. Fetch and display the Pokémon
Wrap your fetch logic in a `try/catch` block. Inside the `try` block:
- Use `await` to send the request to the API and wait for the response
- Check whether the response was successful before moving on — if not, throw an error
- Use `await` again to parse the response body as JSON
- Find the sprite URL in the parsed data and set it as the `src` of the image element — the response object contains a `sprites` property, explore it to find the URL you need
- Make the image visible by changing its `display` style property
- Clear any leftover error text

Inside the `catch` block, display the error message to the user and apply the error CSS class.

### 6. *(Optional)* Show a loading state
Network requests take time. Before sending the request, give the user some feedback that something is happening. If you get here, think about where in the function this feedback should appear, and where it should be cleared again.

---

## Concepts you'll need
- DOM selection and manipulation
- `addEventListener` and keyboard events
- `async/await` and the Fetch API
- `try/catch` for error handling

If something feels unfamiliar, [MDN Web Docs](https://developer.mozilla.org/) is always a good place to start.