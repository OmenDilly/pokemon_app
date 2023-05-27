import axios from "axios";
import { AppDispatch } from "../store";
import { Pokemon } from "../../models/Pokemon";
import { pokemonSlice } from "./PokemonSlice";
import PokemonService from "../../API/PokemonService";
import { Paging } from "../../components/pokemon/PokemonList";

export const fetchPokemons = (paging: Paging) => async (dispatch: AppDispatch) => {
  try {

    dispatch(pokemonSlice.actions.pokemonsFetching)
    const pokemons = await PokemonService.getAll(paging)
    dispatch(pokemonSlice.actions.pokemonsFetchingSuccess(pokemons))

  } catch (error: any) {
    dispatch(pokemonSlice.actions.pokemonsFetchingError(error.message))
  }
}

export const setPage = (page: number) => async (dispatch: AppDispatch) => {
  try {

    dispatch(pokemonSlice.actions.setCurrentPage(page))

  } catch (error: any) {
    throw new Error(error.message)
  }
}

export const setSize = (size: number) => async (dispatch: AppDispatch) => {
  try {

    dispatch(pokemonSlice.actions.setPageSize(size))

  } catch (error: any) {
    throw new Error(error.message)
  }
}