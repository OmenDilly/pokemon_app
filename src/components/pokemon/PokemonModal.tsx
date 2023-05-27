import React, { FC, SetStateAction, useState } from 'react';
import { Button, Carousel, Col, Modal, Row, Space } from 'antd';
import PokemonItemDescription from './PokemonItemDescription';
import { Pokemon } from '../../models/Pokemon';
import ImageCarousel from '../ui/ImageCarousel';
import PokemonInfo from './PokemonInfo';
import PokemonTypeView from './PokemonTypeView';

interface PokemonModalProps {
  pokemon: Pokemon
  open: boolean
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}

const PokemonModal: FC<PokemonModalProps> = ({open, setOpen, pokemon}) => {

  const close = () => {
    setOpen(false);
  };

  const ModalTitle = () => {
    return (
      <Space
        direction='vertical'
      >
        <h3>
          {pokemon.name}
        </h3>
        <PokemonTypeView
          pokemon={pokemon}
        />
      </Space>
    )
  }

  const pokemonImages: string[] = [pokemon.frontImage, pokemon.backImage]

  return (
    <Modal 
      title={<ModalTitle/>} 
      open={open} 
      onOk={close} 
      onCancel={close}
      footer={null}
    >
      <Row
        gutter={[16, 16]}
        style={{
          marginBottom: '1rem'
        }}
      >
        <Col
          xs={24}
          sm={12}
        >
          <ImageCarousel images={pokemonImages}/>
        </Col>
        <Col
          xs={24}
          sm={12}
        >
          <PokemonInfo
            pokemon={pokemon}
          />
        </Col>
      </Row>
      <Row
        gutter={[16, 16]}
      >
        <Col
          span={24}
        >
          <PokemonItemDescription
            pokemon={pokemon}
          />
        </Col>
      </Row>

    </Modal>
  );
};

export default PokemonModal;