import PresentationPokedex from "../components/PresentationPokedex"
import PokemonStarters from "../components/PokemonStarters"
import NewsLetter from "../components/NewsLetter/NewsLetter"
import PokeCard from "../components/Card/PokeCard"
import PokemonSearch from "../components/PokemonSearch"


const Home = () => {
    return (
        <div>
            <PresentationPokedex />
            <PokemonStarters />
            <PokemonSearch />
            <PokeCard />
            <NewsLetter />
        </div>

    )
}

export default Home