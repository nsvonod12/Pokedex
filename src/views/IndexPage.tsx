import { useEffect, useMemo, useState} from "react"
import { usePokeStore } from "../store"
import { Card } from "../components/Card"

function IndexPage() {
  
  const { pokemons, getPokemonList, filterPokemons, auxPokemons} = usePokeStore()
  const hasPokemons = useMemo(() => pokemons.length ,[pokemons])
  const [filter, setFilter] = useState('')

  // const [currentPage, setCurrentPage] = useState(1); // Estado para controlar la página actual
  // const pokemonsPerPage = 9; // Cantidad de pokémons por página

  // const indexOfLastPokemon = currentPage * pokemonsPerPage;
  // const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  // const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

  // // Función para cambiar a la página siguiente
  // const nextPage = () => {
  //   setCurrentPage(prevPage => prevPage + 1);
  // };

  // // Función para cambiar a la página anterior
  // const prevPage = () => {
  //   setCurrentPage(prevPage => prevPage - 1);
  // };

  useEffect(() => {
    getPokemonList()
  }, [])
  
  useEffect(() => {
    filterPokemons(filter)
  }, [filter])

  return (
    <>
        <div className="flex gap-3 my-8 justify-center items-center">
          <input 
            type="text" 
            id="search"
            className="text-slate-500 text-md bg-slate-200 py-2 px-6 rounded-3xl w-96 shadow-md"
            placeholder="Bucar pokemon. Ej. Pikachu, Lucario, Eve, etc"
            onChange={e => setFilter(e.target.value)}
          />
        </div>

        {hasPokemons ? (
        <>
          {/* <div className="col-span-3 flex justify-between my-5">
            <button
              onClick={prevPage}
              disabled={currentPage === 1} // Deshabilitar botón si estamos en la primera página
              className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2 hover:bg-blue-600"
            >
              Anterior
            </button>
            <button
              onClick={nextPage}
              disabled={indexOfLastPokemon >= pokemons.length} // Deshabilitar botón si estamos en la última página
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Siguiente
            </button>
          </div> */}
          
          <div className="p-2 grid grid-cols-3 gap-10 mt-10">
            {pokemons.map(pokemon => (
              <Card 
                key={pokemon.name}
                pokemon={pokemon}
              />
            ))}
          </div>

          
        </>
        
        ):(
          <div className="">
            <p className="text-center text-2xl text-slate-500">{!auxPokemons.length ? 'Cargando...' : 'No se encontraron resultados'}</p>
          </div>
        )}
    </>
  )

}

export default IndexPage
