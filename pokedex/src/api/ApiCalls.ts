import axios from "axios";

axios.defaults.baseURL = "https://pokeapi.co/api/v2";

export default class ApiCalls {
  public static getPokemonInformation = (name: string) => {
    return axios.get(`/pokemon/${name}`);
  };

  public static getMorePokemons = (offset: number) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${offset}`);
  };

  public static getInitialPokemons = () => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=32`);
  };
}
