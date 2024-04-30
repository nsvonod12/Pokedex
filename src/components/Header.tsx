import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="bg-indigo-800 p-6">
      <Link to={"/"}>
        <h1 className="font-outfit font-bold text-5xl text-center text-yellow-400">POKE
            <span className="text-red-500">DEX</span>
        </h1>
      </Link>
    </div>
  )
}

export default Header