import{ useEffect, useState } from "react";

function PokeCard() {
    const [pokemonCard, setPokemonCard] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(
                'https://pokebuildapi.fr/api/v1/pokemon/?_limit=10'
            );
            const data = await response.json();

            const slicedData = data.slice(0, 3);
            setPokemonCard(slicedData);
            console.log(slicedData);
        };
        getData();
    }, []);

    const addToTeam = (pokemon) => {
        console.log(`Added ${pokemon.name} to the team`);
    };

    return (
        <div>
            {pokemonCard.length > 0 && (
                <div>
                    {pokemonCard.map((pokemon) => (
                        <div key={pokemon.id} className="cardItem">
                            <h2>{pokemon.name}</h2>
                            <img className="cardImage" src={pokemon.image} alt={pokemon.name} />
                            <div className="types">
                                {pokemon.apiTypes.map((type, index) => (
                                    <img key={index} src={type.image} alt={type.name} />
                                ))}
                            </div>
                            <button onClick={() => addToTeam(pokemon)}>Add to Team</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default PokeCard;


