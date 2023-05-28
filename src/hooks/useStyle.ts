import { PokemonTypeColors } from "../models/Pokemon";

export const usePokemonTypeColor = (type: string) => {
  switch (type) {
    case "poison":
      return PokemonTypeColors.POISON;
    case "fighting":
      return PokemonTypeColors.FIGHTING;
    case "flying":
      return PokemonTypeColors.FLYING;
    case "ground":
      return PokemonTypeColors.GROUND;
    case "rock":
      return PokemonTypeColors.ROCK;
    case "bug":
      return PokemonTypeColors.BUG;
    case "ghost":
      return PokemonTypeColors.GHOST;
    case "steel":
      return PokemonTypeColors.STEEL;
    case "fire":
      return PokemonTypeColors.FIRE;
    case "water":
      return PokemonTypeColors.WATER;
    case "grass":
      return PokemonTypeColors.GRASS;
    case "electric":
      return PokemonTypeColors.ELECTRIC;
    case "psychic":
      return PokemonTypeColors.PSYCHIC;
    case "ice":
      return PokemonTypeColors.ICE;
    case "dragon":
      return PokemonTypeColors.DRAGON;
    case "dark":
      return PokemonTypeColors.DARK;
    case "fairy":
      return PokemonTypeColors.FAIRY;
    case "unknown":
      return PokemonTypeColors.UNKNOWN;
    case "shadow":
      return PokemonTypeColors.SHADOW;
    default:
      return PokemonTypeColors.UNKNOWN;
  }
};
