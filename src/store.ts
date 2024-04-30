import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { getPokemons } from "./services";
import { pokemonDetails} from "./types";

type PokeState = {
    pokemons: pokemonDetails[],
    pokemonInfo: pokemonDetails,
    auxPokemons: pokemonDetails[]
    getPokemonList: () => void,
    getPokemonInfo: (id: pokemonDetails['id']) => void,
    changePokemonInfo: (e: React.MouseEvent<HTMLButtonElement>, id: pokemonDetails['id']) => void,
    filterPokemons: (cadena: string) => void,
    // loadFromStorage: () => void,
}

export const usePokeStore = create<PokeState>()(devtools((set, get) => ({
    pokemons: [],
    pokemonInfo: {} as pokemonDetails,
    auxPokemons: [],
    getPokemonList: async () => {
        const pokemons = await getPokemons()
        set({
            pokemons: pokemons,
            auxPokemons: pokemons
        })
    },
    getPokemonInfo: (id) => {
        set({
            pokemons: get().auxPokemons
        })
        const pokemonInfo = get().pokemons.filter(pokemon => pokemon.id === id)
        
        set({
            pokemonInfo: pokemonInfo[0]
        })
          
    }, 
    changePokemonInfo: (e, id) => {
        
        if(e.currentTarget.id === 'back'){
            const newId = id > 1 ? id - 1 : id

            const newPokemonInfo = get().pokemons.filter(pokemon => pokemon.id === newId)

            set({
                pokemonInfo: newPokemonInfo[0]
            })
            
        }else {
            const newId = id <= get().pokemons.length - 1 ? id + 1 : id

            const newPokemonInfo = get().pokemons.filter(pokemon => pokemon.id === newId)

            set({
                pokemonInfo: newPokemonInfo[0]
            })
        }
        localStorage.setItem('pokemonInfo', JSON.stringify(get().pokemonInfo))
    }, 
    filterPokemons : (cadena) => {
        
        set({
            pokemons: get().auxPokemons
        })

        const filteredPokemon = get().pokemons.filter(pokemon => pokemon.name.includes(cadena))
        
        set({
            pokemons: filteredPokemon
        })
    },
    // loadFromStorage: () => {
    //     const storedPokemons = localStorage.getItem('pokemons')
    //     const storedAuxPokemons = localStorage.getItem('auxPokemons')
        
    //     if(storedPokemons) {
    //         set({
    //             pokemons: JSON.parse(storedPokemons),
    //             auxPokemons: JSON.parse(storedAuxPokemons),
    //         })
    //     }
    // }, 

})))