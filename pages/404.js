import Image from 'next/image';
import Link from 'next/link';
import { ArrowSmallLeftIcon } from '@heroicons/react/20/solid/index';

import pokeball_404 from '@/images/404_pokeball.png';

export default function Custom404() {
  return (
    <section className='w-screen h-screen flex flex-col justify-center items-center bg-[#f2f2f2]'>
      <section className='flex flex-row justify-center items-center'>
        <span className='text-8xl text-[#9B9A9A] font-bold md:text-9xl'>4</span>
        <Image
          className='w-20 h-20 mx-2 md:w-24 md:h-24 md:mx-4'
          src={pokeball_404}
          alt='Pokeball'
        />
        <span className='text-8xl text-[#9B9A9A] font-bold md:text-9xl'>4</span>
      </section>
      <section className='flex flex-col justify-center items-center mt-12'>
        <p className='font-bold text-2xl text-[#111010] md:text-3xl'>Uh-oh!</p>
        <p className='text-[#9B9A9A] text-lg font-normal md:text-xl'>
          You look lost on your journey!
        </p>
        <Link
          href='/'
          className='flex flex-row justify-between items-center cursor-pointer text-white text-base bg-[#E2050B] py-2 px-3 rounded-full mt-9 md:text-lg md:py-3 md:px-5'>
          <ArrowSmallLeftIcon
            className='w-6 h-6 mr-1 md:w-7 md:h-7'
            // width={24}
            // height={24}
            color='#fff'
          />
          Go Back Home
        </Link>
      </section>
    </section>
  );
}
