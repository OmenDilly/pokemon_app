import { Button, Col, Dropdown, Input, MenuProps, Row, Select, SelectProps, Space } from 'antd';
import React, {FC, SetStateAction} from 'react'
import MultipleSelect from '../ui/MultipleSelect';
import classes from './pokemon.module.css'
import SortSelect from '../ui/SortSelect';
import { Filter } from '../../pages/PokemonPage';

export interface PokemonFilterProps {
  filter: Filter;
  setFilter: React.Dispatch<SetStateAction<Filter>>;
}

const PokemonFilter: FC<PokemonFilterProps> = ({filter, setFilter}) => {

  return (
    <Row
      align={'middle'}
      justify={'space-between'}
      wrap
      style={{
        gap: '.5rem'
      }}
    >
      <Col
        span={24}
      >
        <Input.Search
          value={filter.search}
          allowClear
          size='large'
          onChange={(event) => setFilter(prevFilter => ({...prevFilter, search: event.target.value}))}
          placeholder='Search for pokemons...'
        />
      </Col>
      <Col
        xs={24}
        sm={8}
        md={8}
      >
        <MultipleSelect
          filter={filter}
          setFilter={setFilter}
        />
      </Col>
      <Col
        xs={24}
        sm={5}
        md={5}
      >
        <SortSelect
          filter={filter}
          setFilter={setFilter}
        />
      </Col>
    </Row>
  )
}

export default PokemonFilter