import { FC, useEffect, useMemo, useState } from "react";
import { Pokemon } from "../../models/Pokemon";
import PokemonItem from "./PokemonItem";
import React from "react";
import PokemonService from "../../services/PokemonService";
import { pokemonSlice } from "../../store/reducers/PokemonSlice";
import { List, Pagination, PaginationProps } from "antd";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import classes from "./pokemon.module.css";
import { RootState } from "../../store/store";
import { setPage, setSize } from "../../store/reducers/ActionCreators";

interface PokemonListProps {
  pokemons: Pokemon[];
  getPokemons: (paging: Paging) => void;
}

const PaginationLimits = {
  SMALL: 10,
  MEDIUM: 20,
  LARGE: 50,
} as const;

type ItemLimit = (typeof PaginationLimits)[keyof typeof PaginationLimits];
export type Paging = { page: number; limit: number };

const PokemonList: FC<PokemonListProps> = ({ pokemons, getPokemons }) => {
  const currentPage = useAppSelector(
    (state: RootState) => state.PokemonReducer.currentPage
  );
  const pageSize = useAppSelector(
    (state: RootState) => state.PokemonReducer.pageSize
  );
  const totalPokemons = pokemons.length;

  const pagingValues = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, totalPokemons);

    return {
      startIndex,
      endIndex,
    };
  }, [pokemons, currentPage, pageSize]);

  const displayedPokemons = pokemons.slice(
    pagingValues.startIndex,
    pagingValues.endIndex
  );

  const isLoading = useAppSelector((state) => state.PokemonReducer.isLoading);

  const dispatch = useAppDispatch();

  const [paging, setPaging] = useState<Paging>({
    page: 0,
    limit: PaginationLimits.SMALL,
  });

  // useEffect(() => {
  //   getPokemons(paging)
  // }, [paging]);

  const onShowSizeChange: PaginationProps["onShowSizeChange"] = (
    current,
    pageSize
  ) => {
    const limit: number = pageSize;
    dispatch(setSize(limit));
    // setPaging(prevPaging => ({...prevPaging, limit}));
  };

  const onChange: PaginationProps["onChange"] = (page) => {
    dispatch(setPage(page));
    // setPaging(prevPaging => ({...prevPaging, page: page - 1}));
  };

  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 5,
        xxl: 6,
      }}
      loading={isLoading}
      pagination={{
        align: "end",
        showSizeChanger: true,
        onChange: onChange,
        pageSizeOptions: [
          PaginationLimits.SMALL,
          PaginationLimits.MEDIUM,
          PaginationLimits.LARGE,
        ],
        onShowSizeChange: onShowSizeChange,
        defaultCurrent: 1,
        total: totalPokemons,
      }}
      dataSource={displayedPokemons}
      renderItem={(pokemon) => (
        <List.Item>
          <PokemonItem pokemon={pokemon} />
        </List.Item>
      )}
    />
  );
};

export default PokemonList;
