import { Space, Tag } from 'antd'
import React, { FC } from 'react'
import { Pokemon } from '../../models/Pokemon'

interface PokemonTypeViewProps {
  pokemon: Pokemon
}

const PokemonTypeView: FC<PokemonTypeViewProps> = ({pokemon}) => {
  return (
    <Space
      wrap
    >
      {
        pokemon.types.map((type, index) => 
          <Tag key={index} color={type.color}>{type.name}</Tag>
        )
      }
    </Space>
  )
}

export default PokemonTypeView