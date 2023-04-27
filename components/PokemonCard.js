import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

// import { borderHoverColors, borderColors } from '@/utils/colors';

const borderHoverColors = {
  Normal: 'hover:border-[#A8A77A] focus:border-[#A8A77A]',
  Fire: 'hover:border-[#EE8130] focus:border-[#EE8130]',
  Water: 'hover:border-[#6390F0] focus:border-[#6390F0]',
  Electric: 'hover:border-[#F7D02C] focus:border-[#F7D02C]',
  Grass: 'hover:border-[#7AC74C] focus:border-[#7AC74C]',
  Ice: 'hover:border-[#96D9D6] focus:border-[#96D9D6]',
  Fighting: 'hover:border-[#C22E28] focus:border-[#C22E28]',
  Poison: 'hover:border-[#A33EA1] focus:border-[#A33EA1]',
  Ground: 'hover:border-[#E2BF65] focus:border-[#E2BF65]',
  Flying: 'hover:border-[#A98FF3] focus:border-[#A98FF3]',
  Psychic: 'hover:border-[#F95587] focus:border-[#F95587]',
  Bug: 'hover:border-[#A6B91A] focus:border-[#A6B91A]',
  Rock: 'hover:border-[#B6A136] focus:border-[#B6A136]',
  Ghost: 'hover:border-[#735797] focus:border-[#735797]',
  Dragon: 'hover:border-[#6F35FC] focus:border-[#6F35FC]',
  Dark: 'hover:border-[#705746] focus:border-[#705746]',
  Steel: 'hover:border-[#B7B7CE] focus:border-[#B7B7CE]',
  Fairy: 'hover:border-[#D685AD] focus:border-[#D685AD]',
};

const borderColors = {
  Normal: 'border-[#A8A77A]',
  Fire: 'border-[#EE8130]',
  Water: 'border-[#6390F0]',
  Electric: 'border-[#F7D02C]',
  Grass: 'border-[#7AC74C]',
  Ice: 'border-[#96D9D6]',
  Fighting: 'border-[#C22E28]',
  Poison: 'border-[#A33EA1]',
  Ground: 'border-[#E2BF65]',
  Flying: 'border-[#A98FF3]',
  Psychic: 'border-[#F95587]',
  Bug: 'border-[#A6B91A]',
  Rock: 'border-[#B6A136]',
  Ghost: 'border-[#735797]',
  Dragon: 'border-[#6F35FC]',
  Dark: 'border-[#705746]',
  Steel: 'border-[#B7B7CE]',
  Fairy: 'border-[#D685AD]',
};

export default function PokemonCard(props) {
  /* <a target="_blank" href="https://icons8.com/icon/63311/pokeball">Pokeball</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */

  const router = useRouter();

  const type =
    props?.types[0] === 'Normal'
      ? props?.types.length > 1
        ? props?.types[1]
        : 'Normal'
      : props?.types[0];

  const bHoverColor = borderHoverColors[type];
  const bColor = borderColors[type];

  return (
    <Link
      href={`/pokemon/${props?.name}`}
      prefetch={false}
      className={`${bHoverColor} relative p-6 bg-white flex flex-col justify-between items-center rounded-2xl border-solid border-2 border-gray-300 focus:shadow-[0_4px_18px_0_rgba(0,0,0,0.25)] hover:shadow-[0_4px_18px_0_rgba(0,0,0,0.25)] transition-all duration-500 ease-out`}>
      <div
        className={`${bColor} w-48 h-48 mb-4 rounded-full overflow-hidden flex justify-center items-center bg-white border-2 border-solid`}>
        <figure className={`relative bg-white w-36 h-36 overflow-hidden`}>
          <Image
            className='bg-no-repeat bg-center object-contain'
            src={props.image}
            alt='Pokemon'
            fill
          />
        </figure>
      </div>
      <section className='flex flex-col justify-between items-center'>
        <p className='text-base font-extrabold text-black mb-2'>{props.name}</p>
        <div className='flex flex-wrap'>
          <span className='text-sm font-semibold mr-1'>Type: </span>
          {props?.types?.map((type, index, arr) => (
            <span key={type} className='text-sm font-bold mr-[1px]'>
              {`${type}${index != arr.length - 1 ? ',' : ''}`}
            </span>
          ))}
        </div>
      </section>
      <span className='rounded-full py-2 px-3 bg-[#e8e8e8] text-xs font-bold text-slate-400 absolute top-2 left-1'>
        #{props.number}
      </span>
    </Link>
  );
}
