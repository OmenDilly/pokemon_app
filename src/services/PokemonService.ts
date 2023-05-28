import axios from "axios";
import {
  InfoProps,
  Pokemon,
  PokemonTypeColor,
  PokemonTypeColors,
  PokemonTypeProps,
  StatProps,
} from "../models/Pokemon";
import { useCapitalizeFirstLetter } from "../hooks/useFormat";
import { usePokemonTypeColor } from "../hooks/useStyle";
import { Paging } from "../components/pokemon/PokemonList";

export default class PokemonService {
  static async getAll(paging: Paging) {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${
        paging.page * paging.limit
      }&limit=${paging.limit}`
    );

    const pokemons: Pokemon[] = [];
    await Promise.all(
      response.data.results.map(async (pokemon: any) => {
        const pokemonResponse = await axios.get(pokemon.url);
        const {
          sprites,
          id,
          name,
          stats,
          types,
          base_experience,
          height,
          weight,
        } = pokemonResponse.data;
        const capitalizedName = useCapitalizeFirstLetter(name);
        const baseStats: StatProps[] = [];
        const baseTypes: PokemonTypeProps[] = [];
        const baseInfo: InfoProps[] = [
          {
            name: "Base experience",
            value: base_experience,
          },
          {
            name: "Height",
            value: height,
          },
          {
            name: "Weight",
            value: weight,
          },
        ];

        stats.map((stat: any) => {
          baseStats.push({
            name: stat.stat.name,
            value: stat.base_stat,
          });
        });

        types.map((type: any) => {
          baseTypes.push({
            name: type.type.name,
            color: usePokemonTypeColor(type.type.name),
          });
        });

        const newPokemon = new Pokemon(
          id,
          capitalizedName,
          sprites.front_default,
          sprites.back_default,
          baseStats,
          baseInfo,
          baseTypes
        );
        pokemons.push(newPokemon);
      })
    );

    return pokemons;
  }

  static async getTypes() {
    const response = await axios.get(`https://pokeapi.co/api/v2/type`);
    const types: PokemonTypeProps[] = [];
    await Promise.all(
      response.data.results.map(async (type: any) => {
        const pokemonResponse = await axios.get(type.url);
      })
    );
  }
}
