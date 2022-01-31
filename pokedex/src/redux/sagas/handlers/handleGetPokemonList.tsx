import { PayloadAction } from "@reduxjs/toolkit";
import { call, delay, put } from "redux-saga/effects";
import { setPokemons } from "../../store/slices/PokemonSlice";
import {
  startLoadingPokemonList,
  stopLoadingPokemonList,
} from "../../store/slices/LoadingSlice";
import ApiCalls from "../../../api/ApiCalls";
import { AxiosResponse } from "axios";

export function* handleGetPokemons() {
  try {
    yield put(startLoadingPokemonList({ isLoading: true }));
    const response: AxiosResponse = yield call(ApiCalls.getInitialPokemons);
    yield put(setPokemons(response.data.results));
    yield put(stopLoadingPokemonList({ isLoading: false }));
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetMorePokemons(action: PayloadAction<number>) {
  try {
    const { payload } = action;
    yield put(startLoadingPokemonList({ isLoading: true }));
    const response: AxiosResponse = yield call(
      ApiCalls.getMorePokemons,
      payload
    );
    yield delay(1500);
    yield put(setPokemons(response.data.results));
    yield put(stopLoadingPokemonList({ isLoading: false }));
  } catch (error) {
    console.log(error);
  }
}
