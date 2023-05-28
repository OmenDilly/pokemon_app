import { AppDispatch } from "../store";
import { pokemonSlice } from "./PokemonSlice";

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
