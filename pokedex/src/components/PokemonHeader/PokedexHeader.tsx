import { FC } from "react";
import { Image } from "antd";
// import Pokedex from "../../assets/Pokedex.jpg";
import PokemonLogo from "../../assets/PokemonLogo.jpg";

const PokedexHeader: FC = () => {
  return (
    <div
      style={{
        height: "inherit",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        alt="Pokedex"
        src={PokemonLogo}
        preview={false}
        style={{
          height: 200,
          // width: 140,
          marginTop: "1vh",
          marginBottom: "1vh",
        }}
      />
    </div>
  );
};

export default PokedexHeader;
