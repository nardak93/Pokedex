import PresentationPokedex from "../components/PresentationPokedex"
import PokemonStarters from "../components/PokemonStarters"
import NewsLetter from "../components/NewsLetter/NewsLetter"
import PokeCard from "../components/Card/PokeCard"


const Home = () => {
    return (
        <div>
            <PresentationPokedex />
            <NewsLetter />
            <PokemonStarters />
            <PokeCard />
        </div>

    )
}

export default Home