import { takeLatest, takeEvery } from "redux-saga/effects";
import {
  handleGetPokemons,
  handleGetMorePokemons,
} from "./handlers/handleGetPokemonList";
import { getPokemons, getMorePokemons } from "../store/slices/PokemonSlice";

export function* watcherSaga() {
  yield takeLatest(getPokemons.type, handleGetPokemons);
  yield takeEvery(getMorePokemons.type, handleGetMorePokemons);
}
