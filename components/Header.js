import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

import PokemonBall from '@/images/pokeball-96.png';
import PokemonLogo from '@/images/pokemon_logo.png';

export default function Header() {
  return (
    <>
      <Head>
        <title>Pokémon Pokédex</title>
        <meta
          property='og:title'
          content='Pokémon Pokédex | A Simple Pokémon Pokédex made with NextJS using GraphQL and Apollo'
          key='title'
        />
      </Head>
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
    </>
  );
}
