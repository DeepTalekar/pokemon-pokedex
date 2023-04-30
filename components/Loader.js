import Lottie from 'lottie-react';

import pokeballAnimation from '@/lottie/pokeball-loading-animation.json';

export default function Loader(props) {
  return (
    <div
      className={`w-screen h-[80vh] flex justify-center items-center ${
        props?.containerStyle ? props.containerStyle : ''
      }`}>
      <Lottie
        className='w-24 h-24'
        animationData={pokeballAnimation}
        loop={true}
        autoplay={true}
        autoPlay={true}
      />
    </div>
  );
}
