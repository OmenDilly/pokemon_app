import { Descriptions } from "antd";
import React, { FC } from "react";
import { Pokemon } from "../../models/Pokemon";

interface PokemonItemDescriptionProps {
  pokemon: Pokemon;
}

const PokemonItemDescription: FC<PokemonItemDescriptionProps> = ({
  pokemon,
}) => {
  return (
    <Descriptions column={{ xs: 1, sm: 2 }} size="small" title="Stats" bordered>
      {pokemon.stats.map((stat, index) => (
        <Descriptions.Item key={index} label={stat.name}>
          {stat.value}
        </Descriptions.Item>
      ))}
    </Descriptions>
  );
};

export default PokemonItemDescription;
