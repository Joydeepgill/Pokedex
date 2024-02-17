const express = require("express")

const app = express()
app.get("/", getPokemon) 
app.listen(8000, () => console.log("server running"))

//req - request, res - response
function getPokemon(req, res) {
    const pokemonData = {
        "count": 1302,
        "next": "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
        "previous": null,
        "results": [
          {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon/1/", 
            "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          },
          
          {
            "name": "charmander",
            "url": "https://pokeapi.co/api/v2/pokemon/4/", 
            "sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
          },
         
          {
            "name": "squirtle",
            "url": "https://pokeapi.co/api/v2/pokemon/7/", 
            "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
          },
        ] 
    } 

    res.set('access-control-allow-origin', '*'); 
    res.json(pokemonData); 
}