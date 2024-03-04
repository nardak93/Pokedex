import { useEffect } from "react";
import { useState } from "react";
// import 'card.css';


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

    return (
        <div className="card">
            {pokemonCard.splice(0,3) && (
                <div style={{marginBottom:'5em', border:'5px solid blue'}}>
                    {pokemonCard.map((pokemon) => (
                        <div key={pokemon.id} className="cardItem" style={{marginBottom:'5em', border:'5px solid red'}}>
                                <h2>{pokemon.name}</h2>
                                <img className="cardImage" src={pokemon.image} alt={pokemon.name} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
export default PokeCard; // Add this line