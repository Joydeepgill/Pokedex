//*TODO ~ Grab all the pokemon by using the API only

function fetchPokemonData(apiUrl) {
   
  return new Promise((resolve, reject) => {
    fetch(apiUrl).then(res => {
      if(!res.ok) {
        reject('There was an isse getting the response!')
      } else {
        resolve('the response was a sucess!')
        return console.log(res.json()); 
      }
    }) 
  }) 
} 




fetchPokemonData("https://pokeapi.co/api/v2/pokemon/")


// const pokemonData = {
//     "count": 1302,
//     "next": "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
//     "previous": null,
//     "results": [
//       {
//         "name": "bulbasaur",
//         "url": "https://pokeapi.co/api/v2/pokemon/1/", 
//         "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
//       },
      
//       {
//         "name": "charmander",
//         "url": "https://pokeapi.co/api/v2/pokemon/4/", 
//         "sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
//       },
     
//       {
//         "name": "squirtle",
//         "url": "https://pokeapi.co/api/v2/pokemon/7/", 
//         "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
//       },
//     ] 
// } 

//fetch promise returns resp of anything: makes a request to server; arrow function => shorthand for making a function
//**promise: action will run asychronously  



// const pokemonDataTwo = fetch("http://localhost:8000/").then((res) => {return res.json()}).then((json) => console.log(json))

// for (let i = 0; i < pokemonData.results.length; i++) {

//     //Get pokemon name 
//     const starterPokemon = document.createElement("p"); 
//     const pokemonName = document.createTextNode(pokemonData.results[i]["name"]); 

//     const currentDiv = document.getElementById("pokemon"); 
//     starterPokemon.appendChild(pokemonName);  

//     currentDiv.appendChild(starterPokemon);   


//     //get the pokemon sprite
//     const starterPokemonImg = document.createElement("img");  
//     starterPokemonImg.src = pokemonData.results[i]["sprite"];
//     currentDiv.appendChild(starterPokemonImg); 
//     // console.log(pokemonData.results[i]); 
// } 
