import { useEffect} from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import { usePokeStore } from "../store"


const Layout = () => {

    const { getPokemonList } = usePokeStore()
  
    useEffect(() => {
      getPokemonList()
    }, [])

  
  return (
    <>
        <Header />
        <main className="container mx-auto">
            <Outlet />
        </main>
        

    </>
  )
}

export default Layout