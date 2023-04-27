const { gql } = require('@apollo/client');

const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      types
      image
    }
  }
`;

const SINGLE_POKEMON_DETAIL = gql`
  query pokemon($id: String, $name: String) {
    pokemon(id: $id, name: $name) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      image
    }
  }
`;

const GET_POKEMON_EVOLUTION = gql`
  query pokemon($id: String, $name: String) {
    pokemon(id: $id, name: $name) {
      id
      name
      evolutions {
        id
        number
        name
        classification
        types
        weaknesses
        evolutions {
          id
        }
        image
      }
    }
  }
`;

const GET_POKEMON_ID_NAME = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
    }
  }
`;

export {
  GET_POKEMONS,
  GET_POKEMON_EVOLUTION,
  SINGLE_POKEMON_DETAIL,
  GET_POKEMON_ID_NAME,
};
