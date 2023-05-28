import axios from "axios";
import { AppDispatch } from "../store";
import { Pokemon } from "../../models/Pokemon";
import { pokemonSlice } from "./PokemonSlice";
import PokemonService from "../../services/PokemonService";
import { Paging } from "../../components/pokemon/PokemonList";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPokemons = createAsyncThunk(
  'pokemon/fetchAll',
  async (paging: Paging, thunkAPI) => {
    try {
      const pokemons = await PokemonService.getAll(paging);
      return pokemons
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const setPage = (page: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(pokemonSlice.actions.setCurrentPage(page));
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const setSize = (size: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(pokemonSlice.actions.setPageSize(size));
  } catch (error: any) {
    throw new Error(error.message);
  }
};
