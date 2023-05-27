
export const PokemonTypeColors = {
  POISON: 'magenta',
  FIGHTING: 'red',
  FLYING: 'blue',
  GROUND: 'volcano',
  ROCK: 'default',
  BUG: 'lime',
  GHOST: 'geekblue',
  STEEL: 'magenta',
  FIRE: 'volcano',
  WATER: 'blue',
  GRASS: 'green',
  ELECTRIC: 'gold',
  PSYCHIC: 'orange',
  ICE: 'cyan',
  DRAGON: 'volcano',
  DARK: 'purple',
  FAIRY: 'green',
  UNKNOWN: 'default',
  SHADOW: 'geekblue'
} as const

export const PokemonTypes = [
  'poison',
  'fighting',
  'flying',
  'ground',
  'rock',
  'bug',
  'ghost',
  'steel',
  'fire',
  'water',
  'grass',
  'electric',
  'psychic',
  'ice',
  'dragon',
  'dark',
  'fairy',
  'unknown',
  'shadow'
] as const

export type PokemonTypeColor = typeof PokemonTypeColors[keyof typeof PokemonTypeColors]

export type StatProps = {name: string, value: number}
export type InfoProps = {name: string, value: number}
export type PokemonTypeProps = {name: string, color: string}

export class Pokemon {
  id: number;
  name: string;
  frontImage: string;
  backImage: string;
  stats: StatProps[];
  info: InfoProps[];
  types: PokemonTypeProps[];
  
  constructor(
    id: number, 
    name: string,
    frontImage: string,
    backImage: string,
    stats: StatProps[],
    info: InfoProps[],
    types: PokemonTypeProps[]
  ) {
    this.id = id;
    this.name = name;
    this.frontImage = frontImage;
    this.backImage = backImage;
    this.stats = stats;
    this.info = info
    this.types = types;
  }
}
