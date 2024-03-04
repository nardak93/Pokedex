import { useState } from 'react';

const PokemonSearch = () => {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonData, setPokemonData] = useState(null);
    
    const handleSearch = async () => {
        const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon`);
        const data = await response.json();
        
        const filteredData = data.filter(pokemon =>
            pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
        );

        setPokemonData(filteredData);
        console.log(filteredData); 
    }
    
    return (
        <div className=''>
            <input 
                type="text" 
                value={pokemonName} 
                onChange={e => setPokemonName(e.target.value)} 
            />
            <button onClick={handleSearch}>Search</button>
            {pokemonData && (
                <div className=''>
                    {pokemonData.splice(0,4).map(pokemon => (
                        <div key={pokemon.id} className='cardItem'>
                            <h2>{pokemon.name}</h2>
                            <img src={pokemon.image} alt={pokemon.name} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default PokemonSearch;
