export function createCharacterCard(
  characterImageUrl,
  characterName,
  characterStatus,
  characterType,
  characterOccurrences
) {
  const li = document.createElement("li");
  li.classList.add("card");
  li.innerHTML = `<div class="card__image-container">
                  <img
                    class="card__image"
                    src=${characterImageUrl}
                    alt="${characterName}"
                  />
                  <div class="card__image-gradient"></div>
                </div>
                <div class="card__content">
                  <h2 class="card__title">${characterName}</h2>
                  <dl class="card__info">
                    <dt class="card__info-title">Status</dt>
                    <dd class="card__info-description">${characterStatus}</dd>
                    <dt class="card__info-title">Type</dt>
                    <dd class="card__info-description">${characterType}</dd>
                    <dt class="card__info-title">Occurrences</dt>
                    <dd class="card__info-description">${characterOccurrences}</dd>
                  </dl>
                </div>`;
  return li;
}

console.log(createCharacterCard("url", "Klaus", "Alive", "Coach", 22));

//1. create li element
//2.1 fill li with inner.html
//2.2 set text context to different variables
// 2.3 return li
