import Lottie from 'lottie-react';

import pokeballAnimation from '@/lottie/pokeball-loading-animation.json';

export default function Loader() {
  return (
    <div className='w-screen h-[80vh] flex justify-center items-center'>
      {
        <Lottie
          className='w-24 h-24'
          animationData={pokeballAnimation}
          loop={true}
          autoplay={true}
          autoPlay={true}
        />
      }
    </div>
  );
}
