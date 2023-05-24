import { FC, useEffect } from "react";
import { Pokemon } from "../models/Pokemon";
import PokemonItem from "./PokemonItem";
import PokemonService from "../API/PokemonService";

interface PokemonListProps {
  pokemons: Pokemon[];
}

const PokemonList: FC<PokemonListProps> = ({ pokemons }) => {
  useEffect(() => {
    PokemonService.getAll();
  }, []);

  return (
    <div>
      {pokemons.map(({ id, name }) => (
        <PokemonItem key={id} name={name} />
      ))}
    </div>
  );
};

export default PokemonList;
