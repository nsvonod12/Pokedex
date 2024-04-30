import { BrowserRouter, Routes, Route } from "react-router-dom"
import IndexPage from "./views/IndexPage"
import PokemonDetails from "./views/PokemonDetails"
import Layout from "./Layout/Layout"

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<IndexPage />} index/>
                <Route path="/details" element={<PokemonDetails />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter