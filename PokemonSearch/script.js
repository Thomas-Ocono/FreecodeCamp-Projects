const pokeName = document.getElementById("pokemon-name");
const pokeID = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const sprite = document.getElementById("sprite");

const searchInput = document.getElementById("search-input");
const search = document.getElementById("search-button");

async function getData(input) {
  try {
    const response = await fetch(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${input}`
    );
    const data = await response.json();

    const pokemonSprite = data.sprites.front_default;
    sprite.src = pokemonSprite;
    pokeName.innerText = data.name;
    pokeID.innerText = data.id;
    height.innerText = data.height;
    weight.innerText = data.weight;
    hp.innerText = data.stats[0].base_stat;
    attack.innerText = data.stats[1].base_stat;
    defense.innerText = data.stats[2].base_stat;
    specialAttack.innerText = data.stats[3].base_stat;
    specialDefense.innerText = data.stats[4].base_stat;
    speed.innerText = data.stats[5].base_stat;

    types.innerText = "";
    let typesText = "";
    for (let i = 0; i < data.types.length; i++) {
      let typeEle = document.createElement("p");
      typesText = "";
      typesText += data.types[i].type.name.toUpperCase() + " ";
      typeEle.innerText = typesText;
      types.appendChild(typeEle);
    }
  } catch (error) {
    console.error(error);
    alert("pokemon not found");
  }
}
getData(25);
search.addEventListener("click", () => {
  getData(searchInput.value);
});
