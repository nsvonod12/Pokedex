import axios from "axios"
import { pokemonDetailsSchema } from "../utils/poke-schema";

export async function getPokemons(){
    const pokemons = []
    for(let i = 1; i <= 60; i++){
        
        const url = `https://pokeapi.co/api/v2/pokemon/${i}/`
        const {data} = await axios.get(url)
        const result = pokemonDetailsSchema.safeParse(data)
        
        if(result.success){
            pokemons.push(result.data)
        }
    }
    return pokemons;
}