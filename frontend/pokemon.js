//TODO - write seperate function to display pokemon names 

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



//fetch promise returns resp of anything: makes a request to server; arrow function => shorthand for making a function
//**promise: action will run asychronously  


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
