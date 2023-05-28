import { Select, SelectProps } from "antd";
import React, { FC } from "react";
import { PokemonFilterProps } from "../pokemon/PokemonFilter";
import BeforeInput from "./BeforeInput";

const sortOptions: SelectProps["options"] = [
  {
    value: "name",
    label: "name",
  },
  {
    value: "id",
    label: "order",
  },
];

const SortSelect: FC<PokemonFilterProps> = ({ filter, setFilter }) => {
  const handleChange = (value: string) => {
    setFilter((prevFilter) => ({ ...prevFilter, sort: value }));
  };

  return (
    <BeforeInput name="Sort by">
      <Select
        size="large"
        value={filter.sort}
        style={{
          width: "100%",
        }}
        onChange={handleChange}
        options={sortOptions}
      />
    </BeforeInput>
  );
};

export default SortSelect;
