// import { useState } from 'react';

// const PokemonTeam = () => {
//     const [team, setTeam] = useState([]);

//     // Function to add a Pokémon to the team
//     const addPokemonToTeam = (pokemon) => {
//         setTeam([...team, pokemon]);
//     };

//     // Function to remove a Pokémon from the team
//     const removePokemonFromTeam = (index) => {
//         const newTeam = [...team];
//         newTeam.splice(index, 1);
//         setTeam(newTeam);
//     };

//     return (
//         <div>
//             <h2>My Pokemon Team</h2>
//             {team.length > 0 ? (
//                 <ul>
//                     {team.map((pokemon, index) => (
//                         <li key={index}>
//                             {pokemon.name} 
//                             <button onClick={() => removePokemonFromTeam(index)}>Remove</button>
//                         </li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>Your team is empty</p>
//             )}
//             {/* Example: Button to add a Pokemon to the team */}
//             <button onClick={() => addPokemonToTeam({ name: "Pikachu" })}>Add Pikachu</button>
//         </div>
//     );
// };

// export default PokemonTeam;
