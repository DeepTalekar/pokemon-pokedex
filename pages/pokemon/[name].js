import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import client from '@/root/api/apollo-client';
import { GET_POKEMON_ID_NAME, SINGLE_POKEMON_DETAIL } from '@/root/queries';
import { useLazyQuery } from '@apollo/client';

export default function PokemonDetail(props) {
  const router = useRouter();
  const [getPokemon, { loading, error, data, called }] = useLazyQuery(
    SINGLE_POKEMON_DETAIL,
    {
      variables: { name: router?.query?.name },
      errorPolicy: 'all',
      ssr: false,
      notifyOnNetworkStatusChange: true,
    }
  );
  const [pokemon, setPokemon] = useState(props?.pokemon);
  const [isLoading, setIsLoading] = useState(true);

  console.log('Router pathname: ', router?.query?.name);
  console.log('Pokemon State: ', pokemon);

  useEffect(() => {
    if (data?.hasOwnProperty('pokemon') && called === true) {
      setPokemon(data?.pokemon);
    }
  }, [called, data]);

  useEffect(() => {
    async function fetchPokemonDynamic() {
      if (router.isFallback && called === false) {
        // setIsLoading(true);
        await getPokemon();
        setPokemon(data?.pokemon);
        console.log('Pokemon Dynamically Rendered State: ', pokemon);
        console.log('Pokemon Dynamically Rendered: ', data?.pokemon);
        // setIsLoading(false);
      }
    }

    fetchPokemonDynamic();
  }, [router.isFallback, called]);

  if (error) return <h1>Error {error}</h1>;

  return (
    <>
      {loading === false && (
        <div>
          <h1>Details Page</h1>
        </div>
      )}

      {loading === true && (
        <div>
          <h1>Loading.....!</h1>
        </div>
      )}
    </>
  );
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: GET_POKEMON_ID_NAME,
    variables: {
      first: 20, // Statically render the details page of the first 20 pokemons
    },
  });

  console.log('First 20 pokemons detail page pre static rendering', data);

  const namedPokemonPaths = data?.pokemons.map((pokemon) => ({
    params: { name: pokemon.name },
  }));

  return { paths: namedPokemonPaths, fallback: true };
}

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: SINGLE_POKEMON_DETAIL,
    variables: {
      name: params?.name,
    },
  });

  console.log(
    `Statically Rendered pokemon details page of ${params?.name} with details:`,
    data?.pokemon
  );

  return {
    props: {
      pokemon: data?.pokemon,
    },
  };
}
