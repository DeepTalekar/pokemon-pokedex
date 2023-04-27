import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import client from '@/root/api/apollo-client';
import { useLazyQuery } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWeightHanging } from '@fortawesome/free-solid-svg-icons';
import { BarsArrowUpIcon } from '@heroicons/react/24/outline/index';

import { GET_POKEMON_ID_NAME, SINGLE_POKEMON_DETAIL } from '@/root/queries';

// import { boxShadows } from '@/root/utils/colors';
import Loader from '@/components/Loader';
import PokemonInfoTags from '@/components/PokemonInfoTags';
import AnthropometryCard from '@/components/AnthropometryCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const boxShadows = {
  Normal: 'shadow-[24px_24px_48px_#A8A77A,-24px_-24px_48px_#ffffff]',
  Fire: 'shadow-[24px_24px_48px_#EE8130,-24px_-24px_48px_#ffffff]',
  Water: 'shadow-[24px_24px_48px_#6390F0,-24px_-24px_48px_#ffffff]',
  Electric: 'shadow-[24px_24px_48px_#F7D02C,-24px_-24px_48px_#ffffff]',
  Grass: 'shadow-[24px_24px_48px_#7AC74C,-24px_-24px_48px_#ffffff]',
  Ice: 'shadow-[24px_24px_48px_#96D9D6,-24px_-24px_48px_#ffffff]',
  Fighting: 'shadow-[24px_24px_48px_#C22E28,-24px_-24px_48px_#ffffff]',
  Poison: 'shadow-[24px_24px_48px_#A33EA1,-24px_-24px_48px_#ffffff]',
  Ground: 'shadow-[24px_24px_48px_#E2BF65,-24px_-24px_48px_#ffffff]',
  Flying: 'shadow-[24px_24px_48px_#A98FF3,-24px_-24px_48px_#ffffff]',
  Psychic: 'shadow-[24px_24px_48px_#F95587,-24px_-24px_48px_#ffffff]',
  Bug: 'shadow-[24px_24px_48px_#A6B91A,-24px_-24px_48px_#ffffff]',
  Rock: 'shadow-[24px_24px_48px_#B6A136,-24px_-24px_48px_#ffffff]',
  Ghost: 'shadow-[24px_24px_48px_#735797,-24px_-24px_48px_#ffffff]',
  Dragon: 'shadow-[24px_24px_48px_#6F35FC,-24px_-24px_48px_#ffffff]',
  Dark: 'shadow-[24px_24px_48px_#705746,-24px_-24px_48px_#ffffff]',
  Steel: 'shadow-[24px_24px_48px_#B7B7CE,-24px_-24px_48px_#ffffff]',
  Fairy: 'shadow-[24px_24px_48px_#D685AD,-24px_-24px_48px_#ffffff]',
};

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
        await getPokemon();
        setPokemon(data?.pokemon);
        console.log('Pokemon Dynamically Rendered State: ', pokemon);
        console.log('Pokemon Dynamically Rendered: ', data?.pokemon);
      }
    }

    fetchPokemonDynamic();
  }, [router.isFallback, called]);

  const type =
    pokemon?.types[0] === 'Normal'
      ? pokemon?.types.length > 1
        ? pokemon?.types[1]
        : 'Normal'
      : pokemon?.types[0];

  const boxShadow = boxShadows[type];

  if (error) return <h1>Error {error}</h1>;

  return (
    <div className='py-4 px-4 sm:px-8 md:px-10 lg:px-12'>
      <Header />
      {loading === false && (
        <section className=' grid grid-cols-1 mt-10 md:grid-cols-2 md:gap-x-9 lg:mx-auto xl:max-w-[1180px]'>
          <div
            className={`w-64 h-64 mb-14 place-self-center rounded-3xl overflow-hidden flex justify-center items-center bg-white ${boxShadow} md:place-self-start sm:w-72 sm:h-72 md:mx-auto md:w-80 md:h-80`}>
            <figure
              className={`relative bg-white w-48 h-48 overflow-hidden sm:w-52 sm:h-52 md:w-64 md:h-64`}>
              <Image
                className='bg-no-repeat bg-center object-contain'
                src={pokemon?.image}
                alt={pokemon?.name}
                fill
              />
            </figure>
          </div>

          <article className='flex flex-col justify-between items-start'>
            <p className='text-xl font-bold text-neutral-400'>
              #{pokemon?.number}
            </p>
            <h1 className='text-3xl font-extrabold text-zinc-800'>
              {pokemon?.name}
            </h1>

            <h3 className='text-lg text-gray-500 font-semibold'>
              {pokemon?.classification}
            </h3>

            <PokemonInfoTags title={'Type'} tags={pokemon?.types} />

            <PokemonInfoTags title={'Weakness'} tags={pokemon?.weaknesses} />

            <PokemonInfoTags title={'Resistant'} tags={pokemon?.resistant} />

            <section className='flex flex-row w-full justify-start items-center my-6'>
              <AnthropometryCard
                icon={
                  <FontAwesomeIcon
                    icon={faWeightHanging}
                    className='h-5 w-5 text-neutral-700'
                  />
                }
                title={'Weight'}
                max={pokemon?.weight?.maximum}
                min={pokemon?.weight?.minimum}
                containerStyle={'mr-9'}
              />

              <AnthropometryCard
                icon={
                  <BarsArrowUpIcon
                    color='text-neutral-700'
                    className='h-5 w-5'
                  />
                }
                title={'Height'}
                max={pokemon?.height?.maximum}
                min={pokemon?.height?.minimum}
              />
            </section>
          </article>
        </section>
      )}

      <Footer />

      {loading === true && <Loader />}
    </div>
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
