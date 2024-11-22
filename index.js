import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');

async function fetchCharacters(pageNumber) {
  cardContainer.innerHTML = "";
  const apiUrl = `https://rickandmortyapi.com/api/character?page=${pageNumber}`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  console.log(data);

  const characters = data.results;
  characters.forEach((character) => {
    const imageUrl = character.image;
    const name = character.name;
    const status = character.status;
    const characterType = character.type;
    const occurrences = character.episode.length;
    const characterCard = createCharacterCard(
      imageUrl,
      name,
      status,
      characterType,
      occurrences
    );
    cardContainer.appendChild(characterCard);
  });
}

fetchCharacters();

//1. create const for api url
//2. create function fetch characters
//3. console log for test and check output with function create...
//4. create parameteres for function create
//5. array with 20 objects data.results[0].name

//const characterCard = createCharacterCard("url", "Klaus", "Alive", "Coach", 22);

const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 42;
let pageNumber = 1;
const searchQuery = "";

nextButton.addEventListener("click", () => {
  if (pageNumber < maxPage) {
    pageNumber++;
    fetchCharacters(pageNumber);
    pagination.textContent = `${pageNumber} / ${maxPage}`;
  }
});

prevButton.addEventListener("click", () => {
  if (pageNumber > 1) {
    pageNumber--;
    fetchCharacters(pageNumber);
    pagination.textContent = `${pageNumber} / ${maxPage}`;
  }
});

// 1. create an EventListener to the next Button
// 2. increase the pageNumber by one and fix max
// 3. call the fetchCharacters(pageNumber)
// 4. currentpage Number update pagination.textContent ()
