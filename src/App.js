import { useEffect, useState } from 'react';
import Pokemon from './components/Pokemon';
import Search from './components/Search';

const App = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [query, setQuery] = useState('');
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

  const getAllPokemons = async () => {
    const data = await fetch(url).then((res) => res.json());
    setUrl(data.next);

    function createPokemon(results) {
      results.forEach(async (pokemon) => {
        const data = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        ).then((res) => res.json());

        setAllPokemons((prevData) => [...prevData, data]);
      });
    }
    createPokemon(data.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  const queryHandler = (queryValue) => {
    setQuery(queryValue);
  };

  useEffect(() => {
    const fetchPokemonOnQuery = async () => {
      const response = await fetch(
        query && `https://pokeapi.co/api/v2/pokemon/${query}`
      );
      const data = await response.json();
      setAllPokemons((prev) => [data, ...prev]);
    };
    fetchPokemonOnQuery();
  }, [query]);

  return (
    <div className='text-center'>
      <h1 className='px-4 py-6 text-3xl text-center bg-slate-900 text-gray-200 mb-3'>
        THE POKEMON APP
      </h1>
      <Search onQuery={queryHandler} />
      <div>
        <ul className='px-4 pb-4 grid sm:grid-cols-2 md:grid-cols-4 gap-4'>
          {allPokemons.map((pokemon, index) => (
            <Pokemon
              key={index}
              id={pokemon.id}
              image={pokemon.sprites.other.dream_world.front_default}
              name={pokemon.name}
              experience={pokemon.base_experience}
              height={pokemon.height}
              weight={pokemon.weight}
              type={pokemon.types[0].type.name}
            />
          ))}
        </ul>
        <button
          className='bg-slate-600 px-6 py-3 mb-4 rounded-md text-gray-200 font-semibold text-center'
          onClick={() => getAllPokemons()}
        >
          More Pokemons
        </button>
      </div>
    </div>
  );
};

export default App;
