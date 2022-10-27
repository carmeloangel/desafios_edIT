function getFromPokeApi(url, vuelta) {
  const xhr = new XMLHttpRequest();
  let json = {};

  xhr.open("GET", "https://pokeapi.co/api/v2/" + url);

  xhr.addEventListener("readystatechange", () => {
    //Ejecutamos cuando es 4
    if (xhr.readyState !== 4) return;

    json = JSON.parse(xhr.responseText);

    vuelta(json);
  });

  xhr.send();
}

function getAllPokemons(vuelta) {
  getFromPokeApi("pokemon", vuelta);
}

function getOnePokemon(numero, vuelta) {
  getFromPokeApi(`pokemon/${numero}/`, vuelta);
}

//Probamos lo anterior
getFromPokeApi("", (response) => console.log(response));

getAllPokemons((response) => console.log(response));

getOnePokemon(35, (response) => console.log(response));
