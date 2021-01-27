const characterCard = document.querySelector(".js-character");

const fetchData = () => {
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then(({ results }) => {
      let html = "";
      results.map(({ image, name }) => {
        html =
          html +
          `
        <div class="card">        
        <div class="card__image-wrapper margin-bottom--16">
          <img class="card__image" src=${image} alt=${name}>
          </div> 
          <h1 class="heading heading--name">${name}</h1>
        </div>
            `;
      });
      characterCard.innerHTML = html;
    });
};
fetchData();
