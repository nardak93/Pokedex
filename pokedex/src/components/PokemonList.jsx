 import { useEffect, useState } from "react";
// import 'card.css';

function PokemonList() {
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

    return (
        <div className="card">
            {pokemonCard.length > 0 && (
                <div>
                    {pokemonCard.map((pokemon) => (
                        <div key={pokemon.id} className="cardItem" style={{marginBottom:'2em', border:'1px solid red', padding:'1em'}}>
                            <h2>{pokemon.name}</h2>
                            <img className="cardImage" src={pokemon.image} alt={pokemon.name} />
                            <img className="cardImage" src={pokemon.[0]} alt={pokemon.name} />
                            <div>
                                {pokemon.apiTypes.map((type, index) => (
                                    <img key={index} src={type.image} alt={type.name} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default PokemonList;
