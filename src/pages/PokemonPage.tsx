import { FC, useEffect, useState } from "react";
import React from "react";
import PokemonList, { Paging } from "../components/pokemon/PokemonList";
import { useAppDispatch, useAppSelector } from "../store/hooks/redux";
import { Pokemon } from "../models/Pokemon";
import { fetchPokemons } from "../store/reducers/ActionCreators";
import PokemonFilter from "../components/pokemon/PokemonFilter";
import { usePokemons } from "../hooks/usePokemons";
import classes from './pokemonPage.module.css'
import { RootState } from "../store/store";

export type Filter = {sort: string, search: string, filter: string[]}

const defaultFilter: Filter = {
  sort: 'id',
  search: '',
  filter: []
}

const PokemonsPage: FC = () => {

  const [filter, setFilter] = useState<Filter>(defaultFilter)
  const {pokemons, error, isLoading} = useAppSelector(state => state.PokemonReducer)

  const sortedAndSearchedPokemons = usePokemons(pokemons, filter.sort, filter.search, filter.filter)

  const dispatch = useAppDispatch()

  // useEffect(() => {
  //   getPokemons({limit: 100, page: 0})
  // }, [])

  const getPokemons = async (paging: Paging) => {
    dispatch(fetchPokemons(paging))
  }

  return (
    <div
      className={classes.pokemonPageWrapper}
    >
      <PokemonFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PokemonList pokemons={sortedAndSearchedPokemons} getPokemons={getPokemons} />
    </div>
  );
};

export default PokemonsPage;
