import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import pokemonSlice from "./slices/PokemonSlice";
import loadingSlice from "./slices/LoadingSlice";
import { watcherSaga } from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    pokemons: pokemonSlice,
    loading: loadingSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watcherSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
