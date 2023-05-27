import { Pokemon } from "../../models/Pokemon";
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface PokemonState {
  pokemons: Pokemon[];
  isLoading: boolean;
  error: string;
  currentPage: number;
  pageSize: number;
}

const initialState: PokemonState = {
  pokemons: [],
  isLoading: false,
  error: '',
  currentPage: 1,
  pageSize: 10, // Default page size
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    pokemonsFetching(state, action) {
      state.isLoading = true
      console.log(state.isLoading)
    },
    pokemonsFetchingSuccess(state, action: PayloadAction<Pokemon[]>) {
      state.isLoading = false
      state.error = ''
      console.log(state.isLoading)
      state.pokemons = action.payload

    },
    pokemonsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setPageSize(state, action: PayloadAction<number>) {
      state.pageSize = action.payload;
    },
  }
})

export default pokemonSlice.reducer