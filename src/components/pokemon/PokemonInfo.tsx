import { Descriptions } from 'antd'
import React, { FC } from 'react'
import { Pokemon } from '../../models/Pokemon'

interface PokemonInfoProps {
  pokemon: Pokemon
}

const PokemonInfo: FC<PokemonInfoProps> = ({pokemon}) => {
  return (
    <Descriptions column={1} title="Info" size='small' bordered>
      {
        pokemon.info.map((stat, index) => 
          <Descriptions.Item key={index} label={stat.name}>{stat.value}</Descriptions.Item>
        )
      }
    </Descriptions>
  )
}

export default PokemonInfo