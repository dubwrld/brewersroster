let cardContainer = document.getElementById("container");

async function parseJson() {
  try {
    //Pulling in data from json using fetch
    //Converts data into array of objects using .json()
    let brewersArray = await (await fetch("./brewersRosterArray.json")).json();
    console.log(brewersArray);
    // Sends the array of objects to display brewer players function
    displayBrewerPlayers(brewersArray);
  } catch (error) {
    console.log(error);
  }
}
function displayBrewerPlayers(brewersArray) {
  // displays functions through the array
  brewersArray.forEach((player) => {
    player.isCardFlipped = false;
    cardContainer.insertAdjacentHTML(
      "beforeend",
      `<div id="${player.id}">
      <div>${player.firstName}</div>
      <img src="${player.picture}"><div><div>${player.number}</div>
      <div>${player.primaryPosition}</div></div></div>`
    );
    let card = document.getElementById(`${player.id}`);
    card.addEventListener("click", () => {
      if (!player.isCardFlipped) {
        player.isCardFlipped = true;
        card.innerHTML = `<div>Last Name:${player.lastName}</div>
      <div>Birth City:${player.birthCity}</div>
      <div>Birth Country:${player.birthCountry}</div>
      <div>Birth State Providence:${player.birthStateProvince}</div>
      <div>Primary Player Position:${player.primaryPosition}</div>
      <div>Bat Side:${player.batSide}</div>
      <div>Throw Side:${player.throwSide}</div>
      <div>ID:${player.id}</div>`;
      } else {
        card.innerHTML = "";
        card.innerHTML = `<div id="${player.id}"><div>${player.firstName}</div>
        <img src="${player.picture}">
        <div><div>${player.number}</div>
        <div>${player.primaryPosition}</div></div></div>`;
        player.isCardFlipped = false;
      }
    });
  });
  //Loops through the brewers array
}
parseJson();
