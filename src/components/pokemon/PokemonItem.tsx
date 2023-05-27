import { Card, Carousel, Space, Tag } from "antd";
import Meta from "antd/es/card/Meta";
import { FC, useState } from "react";
import React from "react";
import { useAppSelector } from "../../store/hooks/redux";
import { Pokemon } from "../../models/Pokemon";
import PokemonItemDescription from "./PokemonItemDescription";
import PokemonModal from "./PokemonModal";
import PokemonTypeView from "./PokemonTypeView";

interface PokemonItemProps {
  pokemon: Pokemon;
}

const PokemonItem: FC<PokemonItemProps> = ({pokemon}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <PokemonModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        pokemon={pokemon}
      />
      <Card
        hoverable
        style={{ flex: 1, overflow: 'hidden' }}
        cover={<img src={pokemon.frontImage}/> }
        onClick={() => setIsModalOpen(true)}
      >
        <Space
          direction="vertical"
        >
          <Meta title={pokemon.name}/>
          <PokemonTypeView
            pokemon={pokemon}
          />
        </Space>
      </Card>
    </>

  )
};

export default PokemonItem;
