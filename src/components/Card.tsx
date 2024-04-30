import { Link } from "react-router-dom"
import { usePokeStore } from "../store"
import { pokemonDetails } from "../types"

type CardProps ={
    pokemon: pokemonDetails,
}

export const Card = ({pokemon} : CardProps) => {
    const { getPokemonInfo } = usePokeStore()

    const {
        id, 
        name, 
        sprites:{other:{dream_world:{front_default}}},
    } = pokemon

    async function handleClick(id: pokemonDetails['id']){
        getPokemonInfo(id)
    }

    return (
        <Link to={"/details"}>
            <div 
                id={id.toString()} 
                className="bg-slate-50 p-4 rounded-xl  shadow-md border-b-8 border-r-8 border-slate-300 cursor-pointer"
                onClick={() => handleClick(pokemon.id)}
            >
            
                <div className="p-5 rounded-lg flex flex-col items-end">
                    <p className="text-slate-400 text-lg m-0 font-semibold"># {id}</p>
                    <img 
                        className="mx-auto w-52 h-64 transition-transform hover:scale-125 ease-in-out duration-300"
                        src={front_default} alt={`Imagen de ${pokemon.name}`} 
                    />
                </div>

                <div className={`rounded-lg p-2 
                    ${
                        pokemon.types[0].type.name === 'grass' ? 'bg-green-500' :
                        pokemon.types[0].type.name === 'poison' ? 'bg-purple-500' :
                        pokemon.types[0].type.name === 'water' ? 'bg-blue-500' :
                        pokemon.types[0].type.name === 'fire' ? 'bg-orange-500' :
                        pokemon.types[0].type.name === 'rock' ? 'bg-gray-400' :
                        pokemon.types[0].type.name === 'bug' ? 'bg-lime-400' :
                        pokemon.types[0].type.name === 'dark' ? 'bg-gray-800 text-white' :
                        pokemon.types[0].type.name === 'fairy' ? 'bg-rose-400' :
                        pokemon.types[0].type.name === 'psychic' ? 'bg-yellow-200' :
                        pokemon.types[0].type.name === 'flying' ? 'bg-sky-200' :
                        pokemon.types[0].type.name === 'ground' ? 'bg-amber-700' :
                        pokemon.types[0].type.name === 'ice' ? 'bg-cyan-400' :
                        pokemon.types[0].type.name === 'dragon' ? 'bg-emerald-400' :
                        pokemon.types[0].type.name === 'fighting' ? 'bg-rose-700' :
                        pokemon.types[0].type.name === 'ghost' ? 'bg-cyan-800 text-white' :
                        pokemon.types[0].type.name === 'electric' ? 'bg-yellow-300' : 'bg-slate-300'
                    }
                `}>
                    <h2 className={`text-4xl text-center font-bold uppercase`}>{name}</h2>
                </div>

            </div>
        </Link>
        
    )
}
