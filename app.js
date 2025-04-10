
const characters = [
    {
        "id": 1,
        "name": "Luke Skywalker",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
        "homeworld": "tatooine"
    },

    {
        "id": 3,
        "name": "R2-D2",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
        "homeworld": "naboo"
    },
    {
        "id": 4,
        "name": "Darth Vader",
        "pic": "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
        "homeworld": "tatooine"
    },
    {
        "id": 5,
        "name": "Leia Organa",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
        "homeworld": "alderaan"
    },
    {
        "id": 6,
        "name": "Owen Lars",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
        "homeworld": "tatooine"
    },
    {
        "id": 7,
        "name": "Beru Whitesun lars",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
        "homeworld": "tatooine"
    },
    {
        "id": 8,
        "name": "R5-D4",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
        "homeworld": "tatooine"
    },
    {
        "id": 9,
        "name": "Biggs Darklighter",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
        "homeworld": "tatooine"
    },
    {
        "id": 10,
        "name": "Obi-Wan Kenobi",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
        "homeworld": "stewjon"
    },
    {
        "id": 11,
        "name": "Anakin Skywalker",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
        "homeworld": "tatooine"
    },
    {
        "id": 12,
        "name": "Wilhuff Tarkin",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
        "homeworld": "eriadu"
    },
    {
        "id": 13,
        "name": "Chewbacca",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
        "homeworld": "kashyyyk"
    },
    {
        "id": 14,
        "name": "Han Solo",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
        "homeworld": "corellia"
    },
    {
        "id": 15,
        "name": "Greedo",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
        "homeworld": "Rodia"
    },
    {
        "id": 16,
        "name": "Jabba Desilijic Tiure",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
        "homeworld": "tatooine"
    },
    {
        "id": 18,
        "name": "Wedge Antilles",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
        "homeworld": "corellia"
    },
    {
        "id": 19,
        "name": "Jek Tono Porkins",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
        "homeworld": "bestine"
    },
    {
        "id": 20,
        "name": "Yoda",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
        "homeworld": "naboo"
    },
    {
        "id": 21,
        "name": "Palpatine",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
        "homeworld": "naboo"
    }, {
        "id": 2,
        "name": "C-3PO",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
        "homeworld": "tatooine"
    },
]
const charactersContainer = document.getElementById("charactersContainer");
const loadCharactersButton = document.getElementById("loadCharactersButton")
const filterInput = document.getElementById("filterInput");

// cards area
const newAllCards = () => {
    charactersContainer.innerHTML = "";
    for (const character of characters) {
        const divCards = document.createElement("div");
        divCards.classList.add('card', 'w-60', 'm-2', 'text-white', 'opacity-110', 'rounded-full', 'p-4', 'rounded-lg', 'shadow-lg', 'transition', 'duration-300', 'hover:scale-105', 'flex', 'flex-col', 'items-center', 'text-center');
        divCards.innerHTML = `
        <img src="${character.pic}" alt="${character.name}" class="w-full rounded-md  cursor-pointer">
        <h2 class="text-xl font-semibold mt-2">${character.name}</h2>
        <p class="text-sm text-dark mt-5 -600">HomeWorld ${character.homeworld}</p>
        `
    
        charactersContainer.appendChild(divCards);
    };
};
// button event click change

loadCharactersButton.addEventListener("click", () => {
    if (charactersContainer.classList.contains("hidden")) {
        charactersContainer.classList.remove("hidden");
        filterInput.style.display = "block"
        loadCharactersButton.innerText = "Hide Characters";
        loadCharactersButton.style.background = "red";
    } else {
        charactersContainer.classList.add("hidden");
        charactersContainer.innerHTML = '';
        filterInput.style.display = "none";
        loadCharactersButton.innerText = "Load Characters";
        loadCharactersButton.style.background = "green";
    }
    newAllCards();

})
const characterFilterData = characters.map(
    (character) => character.homeworld
)
const warsHomeworld = [...new Set(characterFilterData)];
console.log(warsHomeworld)
// filter type radio
filterInput.innerHTML = warsHomeworld.map(homeworld =>
    `
    <label class="text-white  items-center ">
        <input type="radio" class="cursor-pointer m-4 w-6 h-5 text-white" name="homeworld" value="${homeworld}">
        ${homeworld}
    </label>

        `).join('');
filterInput.addEventListener("change", (event) => {
    const selectedHomeworld = event.target.value;
    const filteredCharacters = characters.filter(character => character.homeworld === selectedHomeworld);
    charactersContainer.innerHTML = "";
    filteredCharacters.forEach(character => {
        const divCards = document.createElement("div");
        divCards.classList.add('card', 'w-60', 'm-2', 'text-white', 'opacity-110', 'rounded-full', 'p-4', 'rounded-lg', 'shadow-lg', 'transition', 'duration-300', 'hover:scale-105', 'flex', 'flex-col', 'items-center', 'text-center',)
        divCards.innerHTML = `
                    <img src="${character.pic}" alt="${character.name}" class="w-full rounded-md cursor-pointer">
                    <h2 class="text-xl  text-white font-semibold mt-2">${character.name}</h2>
                    <p class="text-sm text-white-600">HomeWorld ${character.homeworld}</p>
                `;
        charactersContainer.appendChild(divCards);
    })
});
