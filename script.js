//Random comment to do a commit to find out on which branch I am

import pokemonArray from  "./data/pokemon.js";

//Function to make pokemon name first letter uppercase

const uppercase = (pokemonName) => {

    return pokemonName[0].toUpperCase() + pokemonName.slice(1).toLowerCase();

}

const pokemonDescription = (pokemonTypes) => {

    if (pokemonTypes.length < 2) {
        return pokemonTypes[0];
    } else {
        return `${pokemonTypes[0]} & ${pokemonTypes[1]}`
    }

}

//Main rendering code

pokemonArray.forEach ( pokemon => {

    const card = document.createElement("div");
    const cardContainer = document.querySelector(".card-container");

    card.innerHTML = 
    `<section class="card" style="width: 100%; height:100%">
        <img src="${pokemon.sprite}" class="card__image">
        <div class="card__content">
            <h3 class="card__heading">
                ${uppercase(pokemon.name)}
            </h3>
            <p class="card__text">
                ${uppercase(pokemon.name)} (#${pokemon.id}) is a ${pokemonDescription(pokemon.types)} type pokemon.
            </p>
        </div>
    </section>`;

    cardContainer.append(card);

});


//Function for event listener

const filterPokemon = () => {

    const clearScreen = document.querySelectorAll(".card");
    clearScreen.forEach ( card=> {
        card.remove();
    })

    const searchedName = document.querySelector(".searchByName").value.toLowerCase();
    const pokemonType = document.getElementById("type").value;
    const pokemonAmount = document.getElementById("amount").value;
    
    pokemonArray.forEach ( pokemon => {

        const card = document.createElement("div");
        const cardContainer = document.querySelector(".card-container");

        if((searchedName != "")) {

            if(searchedName == pokemon.name) {
    
                card.innerHTML = 
                `<section class="card" style="width: 100%; height:100%">
                    <img src="${pokemon.sprite}" class="card__image">
                    <div class="card__content">
                        <h3 class="card__heading">
                            ${uppercase(pokemon.name)}
                        </h3>
                        <p class="card__text">
                            ${uppercase(pokemon.name)} (#${pokemon.id}) is a ${pokemonDescription(pokemon.types)} type pokemon.
                        </p>
                    </div>
                </section>`;
            
                cardContainer.append(card);
            }
        }

        if((pokemonType != "Any")) {

            if(pokemon.types.includes(pokemonType)) {
    
                card.innerHTML = 
                `<section class="card" style="width: 100%; height:100%">
                    <img src="${pokemon.sprite}" class="card__image">
                    <div class="card__content">
                        <h3 class="card__heading">
                            ${uppercase(pokemon.name)}
                        </h3>
                        <p class="card__text">
                            ${uppercase(pokemon.name)} (#${pokemon.id}) is a ${pokemonDescription(pokemon.types)} type pokemon.
                        </p>
                    </div>
                </section>`;
            
                cardContainer.append(card);
            }
        }
    
    });

}

const search = document.getElementById("search").addEventListener("click", filterPokemon);

