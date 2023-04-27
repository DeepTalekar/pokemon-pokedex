import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import client from '../api/apollo-client';
import { GET_POKEMONS } from '@/root/queries';
import { useEffect, useState } from 'react';

import PokemonLogo from '@/images/pokemon_logo.png';
import PokemonBall from '@/images/pokeball-96.png';
import PokemonCard from '@/components/PokemonCard';
import PaginationButton from '@/components/PaginationButton';
import Loader from '@/components/Loader';

const inter = Inter({ subsets: ['latin'] });

export default function Home(props) {
  const [allPokemons, setAllPokemons] = useState(props?.pokemons);
  const [currentStatePokemons, setCurrentStatePokemons] = useState([]);
  const [count, setCount] = useState(20);
  const [disableNavButtons, setDisableNavButtons] = useState({
    next: false,
    prev: true,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setCurrentStatePokemons(allPokemons.slice(count - 20, count));
    setLoading(false);
  }, [allPokemons]);

  useEffect(() => {
    async function getMorePokemons() {
      setLoading(true);
      const { data } = await client.query({
        query: GET_POKEMONS,
        variables: {
          first: count,
        },
      });

      setAllPokemons(data?.pokemons);
      setLoading(false);
    }

    if (count > 60) {
      getMorePokemons();
    }
  }, [count]);

  function onPrevPress(event) {
    event.preventDefault();
    setDisableNavButtons({
      next: true,
      prev: true,
    });

    // setCount(count - 20);
    const copyCount = JSON.parse(JSON.stringify(count - 20));

    setCurrentStatePokemons(allPokemons.slice(copyCount - 20, copyCount));

    setDisableNavButtons({
      next: false,
      prev: copyCount - 20 != 0 ? false : true,
    });

    setCount(count - 20);
  }

  function onNextPress(event) {
    event.preventDefault();
    setDisableNavButtons({
      next: true,
      prev: true,
    });

    // setCount(count + 20);
    const copyCount = JSON.parse(JSON.stringify(count + 20));

    setCurrentStatePokemons(allPokemons.slice(copyCount - 20, copyCount));

    setDisableNavButtons({
      next: copyCount - 20 !== 140 ? false : true,
      prev: false,
    });

    setCount(count + 20);
  }

  console.log('Count: ', count);

  return (
    <div className='py-4 px-4 sm:px-8 md:px-10 lg:px-12'>
      <div className='flex justify-center items-center'>
        <Link href={'/'}>
          <div className='flex flex-col justify-between items-center'>
            <Image
              src={PokemonLogo}
              width={144}
              height={90}
              alt='Pokemon Logo'
            />
            <article className='flex flex-row justify-between items-center mt-4'>
              <Image
                src={PokemonBall}
                width={36}
                height={36}
                alt='Pokemon Ball'
              />
              <p className='pl-2'>Pokédex</p>
            </article>
          </div>
        </Link>
      </div>
      {loading && <Loader />}
      {!loading && (
        <section className='grid grid-cols-[repeat(1,minmax(0,0.75fr))] auto-rows-auto gap-12 place-content-center my-9 sm:grid-cols-2 sm:gap-x-2 md:grid-cols-3 md:gap-x-3 lg:gap-x-4 lg:grid-cols-4 lg:mx-auto xl:max-w-[80vw]'>
          {currentStatePokemons?.map((pokemon, index) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              number={pokemon.number}
              image={pokemon.image}
              types={pokemon.types}
            />
          ))}
        </section>
      )}
      {!loading && (
        <section className='flex flex-row justify-center items-center my-9'>
          <PaginationButton
            disabled={disableNavButtons.prev}
            text={'Prev'}
            className={'mr-4'}
            onClick={onPrevPress}
          />
          <PaginationButton
            text={'Next'}
            disabled={disableNavButtons.next}
            onClick={onNextPress}
          />
        </section>
      )}
    </div>
  );
}
export async function getStaticProps(context) {
  const { data } = await client.query({
    query: GET_POKEMONS,
    variables: {
      first: 60,
    },
  });

  console.log('Initial Pokemon Data Home Page: ', data);
  return {
    props: {
      pokemons: data?.pokemons,
    }, // will be passed to the page component as props
  };
}
