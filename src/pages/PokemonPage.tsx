import { FC } from "react";
import PokemonList from "../components/PokemonList";

const PokemonsPage: FC = () => {
  return (
    <div>
      <h1>Pokemons</h1>
      <PokemonList pokemons={[]} />
    </div>
  );
};

export default PokemonsPage;
