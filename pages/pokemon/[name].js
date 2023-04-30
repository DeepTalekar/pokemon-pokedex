import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Modal } from 'react-responsive-modal';
import { XMarkIcon } from '@heroicons/react/24/outline/index';

import client from '@/root/api/apollo-client';
import { useLazyQuery } from '@apollo/client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWeightHanging } from '@fortawesome/free-solid-svg-icons';
import { BarsArrowUpIcon } from '@heroicons/react/24/outline/index';

import {
  GET_POKEMON_EVOLUTION,
  GET_POKEMON_ID_NAME,
  SINGLE_POKEMON_DETAIL,
} from '@/root/queries';

// import { boxShadows } from '@/root/utils/colors';
import Loader from '@/components/Loader';
import PokemonInfoTags from '@/components/PokemonInfoTags';
import AnthropometryCard from '@/components/AnthropometryCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EvolveButton from '@/components/EvolveButton';
import EvolutionCard from '@/components/EvolutionCard';
import Lottie from 'lottie-react';
import pokeballAnimation from '@/lottie/pokeball-loading-animation.json';

const bgHoverColors = {
  Normal: 'hover:bg-[#A8A77A] focus:bg-[#A8A77A]',
  Fire: 'hover:bg-[#EE8130] focus:bg-[#EE8130]',
  Water: 'hover:bg-[#6390F0] focus:bg-[#6390F0]',
  Electric: 'hover:bg-[#F7D02C] focus:bg-[#F7D02C]',
  Grass: 'hover:bg-[#7AC74C] focus:bg-[#7AC74C]',
  Ice: 'hover:bg-[#96D9D6] focus:bg-[#96D9D6]',
  Fighting: 'hover:bg-[#C22E28] focus:bg-[#C22E28]',
  Poison: 'hover:bg-[#A33EA1] focus:bg-[#A33EA1]',
  Ground: 'hover:bg-[#E2BF65] focus:bg-[#E2BF65]',
  Flying: 'hover:bg-[#A98FF3] focus:bg-[#A98FF3]',
  Psychic: 'hover:bg-[#F95587] focus:bg-[#F95587]',
  Bug: 'hover:bg-[#A6B91A] focus:bg-[#A6B91A]',
  Rock: 'hover:bg-[#B6A136] focus:bg-[#B6A136]',
  Ghost: 'hover:bg-[#735797] focus:bg-[#735797]',
  Dragon: 'hover:bg-[#6F35FC] focus:bg-[#6F35FC]',
  Dark: 'hover:bg-[#705746] focus:bg-[#705746]',
  Steel: 'hover:bg-[#B7B7CE] focus:bg-[#B7B7CE]',
  Fairy: 'hover:bg-[#D685AD] focus:bg-[#D685AD]',
};

const buttonBoxShadows = {
  Normal:
    'hover:shadow-[0px_15px_20px_#A8A77A] focus:shadow-[0px_15px_20px_#A8A77A]',
  Fire: 'hover:shadow-[0px_15px_20px_#EE8130] focus:shadow-[0px_15px_20px_#EE8130]',
  Water:
    'hover:shadow-[0px_15px_20px_#6390F0] focus:shadow-[0px_15px_20px_#6390F0]',
  Electric:
    'hover:shadow-[0px_15px_20px_#F7D02C] focus:shadow-[0px_15px_20px_#F7D02C]',
  Grass:
    'hover:shadow-[0px_15px_20px_#7AC74C] focus:shadow-[0px_15px_20px_#7AC74C]',
  Ice: 'hover:shadow-[0px_15px_20px_#96D9D6] focus:shadow-[0px_15px_20px_#96D9D6]',
  Fighting:
    'hover:shadow-[0px_15px_20px_#C22E28] focus:shadow-[0px_15px_20px_#C22E28]',
  Poison:
    'hover:shadow-[0px_15px_20px_#A33EA1] focus:shadow-[0px_15px_20px_#A33EA1]',
  Ground:
    'hover:shadow-[0px_15px_20px_#E2BF65] focus:shadow-[0px_15px_20px_#E2BF65]',
  Flying:
    'hover:shadow-[0px_15px_20px_#A98FF3] focus:shadow-[0px_15px_20px_#A98FF3]',
  Psychic:
    'hover:shadow-[0px_15px_20px_#F95587] focus:shadow-[0px_15px_20px_#F95587]',
  Bug: 'hover:shadow-[0px_15px_20px_#A6B91A] focus:shadow-[0px_15px_20px_#A6B91A]',
  Rock: 'hover:shadow-[0px_15px_20px_#B6A136] focus:shadow-[0px_15px_20px_#B6A136]',
  Ghost:
    'hover:shadow-[0px_15px_20px_#735797] focus:shadow-[0px_15px_20px_#735797]',
  Dragon:
    'hover:shadow-[0px_15px_20px_#6F35FC] focus:shadow-[0px_15px_20px_#6F35FC]',
  Dark: 'hover:shadow-[0px_15px_20px_#705746] focus:shadow-[0px_15px_20px_#705746]',
  Steel:
    'hover:shadow-[0px_15px_20px_#B7B7CE] focus:shadow-[0px_15px_20px_#B7B7CE]',
  Fairy:
    'hover:shadow-[0px_15px_20px_#D685AD] focus:shadow-[0px_15px_20px_#D685AD]',
};

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

const modalStyle = {
  background: 'rgba(255, 255, 255, 0.21)',
  'border-radius': '16px',
  'box-shadow': '0 4px 30px rgba(0, 0, 0, 0.1)',
  'backdrop-filter': 'blur(5.4px)',
  '-webkit-backdrop-filter': 'blur(5.4px)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  // 'max-width': 'min-content',
};
const overlayStyle = {
  background: 'rgba(0, 0, 0, 0.5)',
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
  const [evolutions, setEvolutions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [evolutionLoading, setEvolutionLoading] = useState(true);

  const [getEvolutions, _] = useLazyQuery(GET_POKEMON_EVOLUTION, {
    variables: { name: pokemon?.name },
    errorPolicy: 'all',
    ssr: false,
    notifyOnNetworkStatusChange: true,
  });

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

  async function onEvolveButtonClick(event) {
    event.preventDefault();
    setIsModalOpen(true);
    setEvolutionLoading(true);

    const { data } = await getEvolutions();

    console.log('Evolutions: ', data?.pokemon?.evolutions);

    setEvolutions(data?.pokemon?.evolutions ?? []);

    setEvolutionLoading(false);
  }

  function onCloseModalPress() {
    setIsModalOpen(false);
  }

  const type =
    pokemon?.types[0] === 'Normal'
      ? pokemon?.types.length > 1
        ? pokemon?.types[1]
        : 'Normal'
      : pokemon?.types[0];

  const boxShadow = boxShadows[type];
  const buttonBoxShadow = buttonBoxShadows[type];
  const bgHoverColor = bgHoverColors[type];

  if (error) return <h1>Error {error}</h1>;

  return (
    <div className='py-4 px-4 sm:px-8 md:px-10 lg:px-12 relative'>
      <Header />
      {loading === false && (
        <section className=' grid grid-cols-1 mt-10 md:grid-cols-2 md:gap-x-9 lg:mx-auto xl:max-w-[1180px]'>
          <div
            className={`w-64 h-64 mb-14 place-self-center rounded-3xl overflow-hidden flex justify-center items-center hover:translate-y-[-8px] transition-all ease-in-out duration-300 bg-white ${boxShadow} md:place-self-start sm:w-72 sm:h-72 md:mx-auto md:w-80 md:h-80`}>
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

            <section>
              <EvolveButton
                onClick={onEvolveButtonClick}
                buttonBoxShadow={buttonBoxShadow}
                bgHoverColor={bgHoverColor}
              />

              <Modal
                open={isModalOpen}
                closeOnOverlayClick={true}
                closeOnEsc={true}
                blockScroll={true}
                closeIcon={<XMarkIcon className='w-6 h-6' color='#fff' />}
                center={true}
                onClose={onCloseModalPress}
                styles={{
                  modal: modalStyle,
                  overlay: overlayStyle,
                }}>
                {evolutionLoading === true && (
                  <div className='flex justify-center items-center w-28 h-28'>
                    <Lottie
                      className='w-24 h-24'
                      animationData={pokeballAnimation}
                      loop={true}
                      autoplay={true}
                      autoPlay={true}
                    />
                  </div>
                )}
                {evolutionLoading === false && evolutions?.length !== 0 && (
                  <section
                    // className='py-6 px-4 flex flex-col justify-center items-center sm:flex-row sm:flex-wrap lg:grid lg:grid-cols-3 lg:auto-rows-auto lg:place-items-center lg:gap-x-12'
                    className='py-6 px-4 flex flex-col justify-center items-center sm:flex-row sm:flex-wrap'>
                    {evolutions?.map((evolution) => (
                      <EvolutionCard
                        key={evolution?.name}
                        containerStyle='my-2 sm:mx-4 md:mx-6'
                        number={evolution?.number}
                        name={evolution?.name}
                        image={evolution?.image}
                        types={evolution?.types}
                        onClick={async () => {
                          onCloseModalPress();
                          await router.push(`/pokemon/${evolution?.name}`);
                          await router.reload();
                        }}
                      />
                    ))}
                  </section>
                )}
                {evolutionLoading === false && evolutions?.length === 0 && (
                  <p className='text-[#E2050B] p-6 text-xl font-semibold text-center'>
                    There are no evolutions of {pokemon?.name}
                  </p>
                )}
              </Modal>
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
