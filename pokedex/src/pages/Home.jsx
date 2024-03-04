import PresentationPokedex from "../components/PresentationPokedex"
import PokemonStarters from "../components/PokemonStarters"
import NewsLetter from "../components/NewsLetter/NewsLetter"
import PokeCard from "../components/Card/PokeCard"
import PokemonSearch from "../components/PokemonSearch"
// import PokemonTeam from "../components/PokemonTeam"


const Home = () => {
    return (
        <div>
            <PresentationPokedex />
            <PokemonStarters />
            <PokemonSearch />
            <PokeCard />
            {/* <PokemonTeam /> */}
            <NewsLetter />
        </div>

    )
}

export default Home