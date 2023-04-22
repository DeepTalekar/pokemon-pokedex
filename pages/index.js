import Image from 'next/image';
import { Inter } from 'next/font/google';
import client from '../api/apollo-client';
import { GET_POKEMONS } from '@/root/queries';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home(props) {
  const [allPokemons, setAllPokemons] = useState(props?.pokemons);
  const [currentStatePokemons, setCurrentStatePokemons] = useState([]);

  useEffect(() => {
    setCurrentStatePokemons(allPokemons.slice(0, 21));
  }, []);

  return <div>{JSON.stringify(currentStatePokemons)}</div>;
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
