


const PokemonList = ({name , slug, image}) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{slug}</p>
            <img src={`https://pokebuildapi.fr/api/v1/pokemon${image}`} alt={''} />
        </div>
    )
}

export default PokemonList