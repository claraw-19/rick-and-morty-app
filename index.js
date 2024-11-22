import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');

async function fetchCharacters(pageNumber, searchQuery) {
  cardContainer.innerHTML = "";
  const apiUrl = `https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${searchQuery}`;
  const response = await fetch(apiUrl);
  const data = await response.json();

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
let searchQuery = "";

fetchCharacters(pageNumber, searchQuery);

nextButton.addEventListener("click", () => {
  if (pageNumber < maxPage) {
    pageNumber++;
    fetchCharacters(pageNumber, searchQuery);
    pagination.textContent = `${pageNumber} / ${maxPage}`;
  }
});

prevButton.addEventListener("click", () => {
  if (pageNumber > 1) {
    pageNumber--;
    fetchCharacters(pageNumber, searchQuery);
    pagination.textContent = `${pageNumber} / ${maxPage}`;
  }
});

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = event.target.elements;
  searchQuery = formElements.query.value;
  pageNumber = 1;
  fetchCharacters(pageNumber, searchQuery);
});
