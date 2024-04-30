import { Link } from "react-router-dom"
import { usePokeStore } from "../store"

const PokemonDetails = () => {
  
  const { pokemonInfo, changePokemonInfo } = usePokeStore()
  const pokemonImage = pokemonInfo.sprites.other.dream_world.front_default
  
  
  return (
      <>
          <Link to={"/"} >
            <p className="flex items-center text-lg absolute gap-3 hover:-translate-x-2 duration-300 hover:text-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              Regresar
            </p>
          </Link>
          <h1 className="text-4xl text-center uppercase font-semibold mt-5 w-full">details</h1>

          <div 
            className="grid grid-cols-4 my-5 content-center"
          >
                <div className="col-span-1 flex items-center justify-center bg-transparent">
                  <button 
                    id="back" 
                    className="p-5 hover:-translate-x-2 duration-300"
                    onClick={ e => changePokemonInfo(e, pokemonInfo.id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                  </button> 
                </div>

              <div className="col-span-2 shadow-2xl rounded-2xl w-4/6 mx-auto">
                <div className={`py-5 rounded-t-2xl 
                  ${
                    pokemonInfo.types[0].type.name === 'grass' ? 'bg-green-400' :
                    pokemonInfo.types[0].type.name === 'poison' ? 'bg-purple-400' :
                    pokemonInfo.types[0].type.name === 'water' ? 'bg-blue-400' :
                    pokemonInfo.types[0].type.name === 'fire' ? 'bg-orange-400' :
                    pokemonInfo.types[0].type.name === 'rock' ? 'bg-gray-300' :
                    pokemonInfo.types[0].type.name === 'bug' ? 'bg-lime-300' :
                    pokemonInfo.types[0].type.name === 'dark' ? 'bg-gray-700 text-white' :
                    pokemonInfo.types[0].type.name === 'fairy' ? 'bg-rose-300' :
                    pokemonInfo.types[0].type.name === 'psychic' ? 'bg-yellow-300' :
                    pokemonInfo.types[0].type.name === 'flying' ? 'bg-sky-200' :
                    pokemonInfo.types[0].type.name === 'ground' ? 'bg-amber-600' :
                    pokemonInfo.types[0].type.name === 'ice' ? 'bg-cyan-300' :
                    pokemonInfo.types[0].type.name === 'dragon' ? 'bg-emerald-200' :
                    pokemonInfo.types[0].type.name === 'fighting' ? 'bg-rose-500' :
                    pokemonInfo.types[0].type.name === 'ghost' ? 'bg-cyan-600' :
                    pokemonInfo.types[0].type.name === 'electric' ? 'bg-yellow-400' : 'bg-slate-200'
                  }
                `}>
                  <p className= {pokemonInfo.types[0].type.name === 'dark' ? "text-white text-lg m-0 font-semibold text-end mx-10": "text-slate-700 text-lg m-0 font-semibold text-end mx-10"} ># {pokemonInfo.id}</p>
                  <img className="w-full h-28" src={pokemonImage} alt={`Imagen de ${pokemonInfo.name}`} />
                  <div className="flex justify-center gap-5 my-5">
                      {pokemonInfo.types.map(type => (
                        <p 
                          key={type.type.name} 
                          className={`text-xs px-3 py-1.5 rounded-3xl font-semibold shadow-lg
                            ${
                              type.type.name === 'grass' ? 'bg-green-500 text-white' :
                              type.type.name === 'poison' ? 'bg-purple-500 text-white' :
                              type.type.name === 'water' ? 'bg-blue-500 text-white' :
                              type.type.name === 'fire' ? 'bg-orange-500 ' :
                              type.type.name === 'rock' ? 'bg-gray-400' :
                              type.type.name === 'bug' ? 'bg-lime-400' :
                              type.type.name === 'dark' ? 'bg-gray-800 text-white' :
                              type.type.name === 'fairy' ? 'bg-rose-400' :
                              type.type.name === 'psychic' ? 'bg-yellow-200' :
                              type.type.name === 'flying' ? 'bg-sky-200 text-black font-semibold' :
                              type.type.name === 'ground' ? 'bg-amber-700 text-white' :
                              type.type.name === 'ice' ? 'bg-cyan-400 text-black' :
                              type.type.name === 'dragon' ? 'bg-emerald-400' :
                              type.type.name === 'fighting' ? 'bg-rose-700 text-white' :
                              type.type.name === 'ghost' ? 'bg-cyan-800 text-white' :
                              type.type.name === 'electric' ? 'bg-yellow-300' : 'bg-slate-300'
                            }`
                          }
                        >
                          {type.type.name}
                        </p>
                      ))}
                  </div>
                  
                  <h2 className="text-3xl text-center uppercase font-semibold">{pokemonInfo.name}</h2>
                  <div className="text-center my-5 space-y-2">
                    <p className="text-sm font-bold">Height: <span className="font-normal"> {pokemonInfo.height}</span></p>
                    <p className="text-sm font-bold">Weight:  <span className="font-normal"> {pokemonInfo.weight}</span></p>
                  </div>
                </div>

                <div className="mx-auto w-full p-10 space-y-6">
                  {pokemonInfo.stats.map(stat => (
                    <div key={stat.stat.name}>
                      <p 
                        className="mb-1 text-xs font-bold uppercase"
                      >
                        {stat.stat.name} - <span className="font-normal">{stat.base_stat}</span>
                      </p>

                      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-300 overflow-hidden">
                        <div 
                          className={`bg-blue-600 h-2.5 rounded-full 
                            ${
                              pokemonInfo.types[0].type.name === 'grass' ? 'bg-green-500' :
                              pokemonInfo.types[0].type.name === 'poison' ? 'bg-purple-500' :
                              pokemonInfo.types[0].type.name === 'water' ? 'bg-blue-500' :
                              pokemonInfo.types[0].type.name === 'fire' ? 'bg-orange-500' :
                              pokemonInfo.types[0].type.name === 'rock' ? 'bg-gray-400' :
                              pokemonInfo.types[0].type.name === 'bug' ? 'bg-lime-400' :
                              pokemonInfo.types[0].type.name === 'dark' ? 'bg-gray-800' :
                              pokemonInfo.types[0].type.name === 'fairy' ? 'bg-rose-400' :
                              pokemonInfo.types[0].type.name === 'psychic' ? 'bg-yellow-200' :
                              pokemonInfo.types[0].type.name === 'flying' ? 'bg-sky-200' :
                              pokemonInfo.types[0].type.name === 'ground' ? 'bg-amber-700' :
                              pokemonInfo.types[0].type.name === 'ice' ? 'bg-cyan-400' :
                              pokemonInfo.types[0].type.name === 'dragon' ? 'bg-emerald-400' :
                              pokemonInfo.types[0].type.name === 'fighting' ? 'bg-rose-700' :
                              pokemonInfo.types[0].type.name === 'ghost' ? 'bg-cyan-800' :
                              pokemonInfo.types[0].type.name === 'electric' ? 'bg-yellow-300' : 'bg-slate-400'
                            }
                          `} style={{width: `${stat.base_stat}%`}}>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-1 flex items-center justify-center bg-transparent">
                <button 
                  id="next" 
                  className="p-5 hover:translate-x-2 duration-300" 
                  onClick={e => changePokemonInfo(e, pokemonInfo.id)} 
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
          </div>
      </>
  )
}

export default PokemonDetails