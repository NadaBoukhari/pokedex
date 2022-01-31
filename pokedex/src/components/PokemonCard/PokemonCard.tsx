import { FC, useEffect, useState } from "react";
import { Card, List } from "antd";
import { Pokemons } from "../App";
import PokemonModal from "../PokemonModal";
import ApiCalls from "../../api/ApiCalls";
import { capitaliseFirstLetter } from "../../utils/modifiers";

export interface PokemonState {
  name: string;
  weight: number;
  height: number;
  image: string;
  type: string;
  order: number;
  abilities: string[];
}

const PokemonCard: FC<Pokemons> = ({ name }) => {
  const [pokemonInformation, setPokemonInformation] = useState<PokemonState>();
  const [isPokemonDetailsVisible, setIsPokemonDetailsVisible] =
    useState<boolean>(false);

  const getPokemon = () => {
    ApiCalls.getPokemonInformation(name)
      .then((res) => {
        const state: PokemonState = {
          name: res.data.name,
          weight: res.data.weight,
          height: res.data.height,
          image: res.data.sprites.front_default,
          type: res.data.types[0].type.name,
          order: res.data.order,
          abilities: res.data.abilities.map((item) => {
            return item.ability.name;
          }),
        };
        setPokemonInformation(state);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getPokemon();
  }, []);

  const showPokemonDetailsModal = () => {
    setIsPokemonDetailsVisible(true);
  };

  return (
    <>
      <List.Item key={name} onClick={showPokemonDetailsModal}>
        <div
          style={{
            height: "inherit",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Card
            className="layered box"
            style={{
              background: "black",
              color: "white",
              border: 0,
              borderRadius: "10px",
            }}
            size="small"
            cover={
              <img
                alt={name}
                src={pokemonInformation && pokemonInformation.image}
              />
            }
          >
            {pokemonInformation &&
              capitaliseFirstLetter(pokemonInformation.name)}
          </Card>
        </div>
      </List.Item>
      {pokemonInformation && (
        <PokemonModal
          visible={isPokemonDetailsVisible}
          setVisible={setIsPokemonDetailsVisible}
          pokemon={pokemonInformation}
        />
      )}
    </>
  );
};

export default PokemonCard;
