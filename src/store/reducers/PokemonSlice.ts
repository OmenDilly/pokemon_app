import { Paging } from "../../components/pokemon/PokemonList";
import { Pokemon } from "../../models/Pokemon";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import PokemonService from "../../services/PokemonService";

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
  error: "",
  currentPage: 1,
  pageSize: 10,
};

export const fetchPokemons = createAsyncThunk(
  "pokemon/fetchPokemons",
  async (paging: Paging, thunkAPI) => {
    try {
      const pokemons = await PokemonService.getAll(paging);
      return pokemons;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setPageSize(state, action: PayloadAction<number>) {
      state.pageSize = action.payload;
    },
  },
  extraReducers: {
    [fetchPokemons.fulfilled.type]: (
      state,
      action: PayloadAction<Pokemon[]>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.pokemons = action.payload;
    },
    [fetchPokemons.pending.type]: (state, action: PayloadAction<Pokemon[]>) => {
      state.isLoading = true;
    },
    [fetchPokemons.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default pokemonSlice.reducer;
