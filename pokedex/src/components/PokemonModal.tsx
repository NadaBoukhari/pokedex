import { Button, Descriptions, Modal } from "antd";
import { Dispatch, FC, SetStateAction } from "react";
import { PokemonState } from "./PokemonCard/PokemonCard";
import { capitaliseFirstLetter } from "./../utils/modifiers";

interface PokemonModalProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  pokemon: PokemonState;
}

const PokemonModal: FC<PokemonModalProps> = ({
  visible,
  setVisible,
  pokemon,
}) => {
  const handleClose = () => {
    setVisible(false);
  };

  return (
    <Modal
      visible={visible}
      onCancel={handleClose}
      width={600}
      footer={[
        <Button type="primary" key="OK" onClick={handleClose}>
          OK
        </Button>,
      ]}
    >
      <Descriptions
        title={`${capitaliseFirstLetter(pokemon.name)} Information`}
        bordered
        size="small"
      >
        <Descriptions.Item label="Image">
          <img src={pokemon && pokemon.image} alt={pokemon.name} />
        </Descriptions.Item>
        <Descriptions.Item label="Order">
          {pokemon && pokemon.order}
        </Descriptions.Item>
        <Descriptions.Item label="Type">
          {pokemon && pokemon.type}
        </Descriptions.Item>
        <Descriptions.Item label="Weight">
          {pokemon && pokemon.weight}
        </Descriptions.Item>
        <Descriptions.Item label="Height">
          {pokemon && pokemon.height}
        </Descriptions.Item>
        <Descriptions.Item label="Abilities">
          {pokemon &&
            pokemon.abilities.map((item) => {
              return (
                <div key={item}>
                  {item} <br />
                </div>
              );
            })}
        </Descriptions.Item>
      </Descriptions>
      ,
    </Modal>
  );
};

export default PokemonModal;
