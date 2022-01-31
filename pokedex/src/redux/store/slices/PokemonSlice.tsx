import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PokemonData {
  name: string;
  url: string;
}

interface PokemonState {
  pokemons: PokemonData[];
}

const initialState: PokemonState = { pokemons: [] };

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setPokemons: (state, action: PayloadAction<PokemonData[]>) => {
      state.pokemons = action.payload;
    },
    getPokemons: () => {},
    getMorePokemons: (state, action: PayloadAction<number>) => {},
  },
});

export const { setPokemons, getPokemons, getMorePokemons } =
  pokemonSlice.actions;

export default pokemonSlice.reducer;
