import React, { FC } from "react";
import { Select, Space, Tag } from "antd";
import type { SelectProps } from "antd";
import type { CustomTagProps } from "rc-select/lib/BaseSelect";
import BeforeInput from "./BeforeInput";
import { PokemonTypes } from "../../models/Pokemon";
import { usePokemonTypeColor } from "../../hooks/useStyle";
import { PokemonFilterProps } from "../pokemon/PokemonFilter";

const options: SelectProps["options"] = [];

PokemonTypes.map((type) =>
  options.push({
    label: type,
    value: type,
  })
);

const tagRender = (props: CustomTagProps) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const tagColor = usePokemonTypeColor(value);
  return (
    <Tag
      color={tagColor}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  );
};

const MultipleSelect: FC<PokemonFilterProps> = ({ filter, setFilter }) => {
  const handleChange = (value: string[]) => {
    setFilter((prevFilter) => ({ ...prevFilter, filter: value }));
  };

  return (
    <BeforeInput name="Type">
      <Select
        mode="multiple"
        size="large"
        allowClear
        tagRender={tagRender}
        style={{ width: "100%" }}
        placeholder="select type"
        value={filter.filter}
        onChange={handleChange}
        options={options}
      />
    </BeforeInput>
  );
};

export default MultipleSelect;
