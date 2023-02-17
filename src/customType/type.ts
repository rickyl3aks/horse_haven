export interface horseType {
  id?: number;
  name?: string;
  img?: string;
  country?: string;
  weight?: string;
  body_type?: string;
  life_expectancy?: number;
  colour?: {
    Blanket: string[];
    Leopard: string[];
    Snowflake: string[];
    "Marble/Varnish": string[];
  };
  personality?: string;
}

export interface horseT {
  horse_breed: HorseBreed[];
}

export interface HorseBreed {
  id: number;
  name: string;
  img: string;
  country: string;
  weight: string;
  body_type: string;
  life_expectancy: number;
  personality: string;
  colour: Colour;
}

export interface Colour {
  Blanket: string[];
  Leopard: string[];
  Snowflake: string[];
  "Marble/Varnish": string[];
}
