import { useMemo } from "react";
import { Pokemon } from "../models/Pokemon";

export const useSortedPokemons = (
  pokemons: Pokemon[],
  sort: string
): Pokemon[] => {
  const sortedPokemons = useMemo(() => {
    if (sort) {
      return [...pokemons].sort((a: Pokemon, b: Pokemon) => {
        const propA = a[sort as keyof Pokemon];
        const propB = b[sort as keyof Pokemon];

        if (typeof propA === "string" && typeof propB === "string") {
          return propA.localeCompare(propB);
        }

        if (propA && propB) {
          return propA < propB ? -1 : propA > propB ? 1 : 0;
        }

        return 0;
      });
    }
    return pokemons;
  }, [sort, pokemons]);

  return sortedPokemons;
};

export const useFilteredPokemons = (
  pokemons: Pokemon[],
  filter: string[]
): Pokemon[] => {
  const filteredPokemons = useMemo(() => {
    if (filter.length) {
      return [...pokemons].filter((pokemon) => {
        return filter.some((selectedType) =>
          pokemon.types.some((type) => type.name === selectedType)
        );
      });
    }
    return pokemons;
  }, [filter, pokemons]);

  return filteredPokemons;
};

export const usePokemons = (
  pokemons: Pokemon[],
  sort: string,
  search: string,
  filter: string[]
): Pokemon[] => {
  const sortedPokemons = useSortedPokemons(pokemons, sort);

  const sortedAndFilteredPokemons = useFilteredPokemons(sortedPokemons, filter);

  const sortedAndSearchedpokemons = useMemo(() => {
    return sortedAndFilteredPokemons.filter((pokemon) =>
      pokemon.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }, [search, sortedAndFilteredPokemons]);

  return sortedAndSearchedpokemons;
};
