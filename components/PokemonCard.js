import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import { borderHoverColors, borderColors } from '@/utils/colors';

const borderHoverColors = {
  normal: 'hover:border-[#A8A77A] focus:border-[#A8A77A]',
  fire: 'hover:border-[#EE8130] focus:border-[#EE8130]',
  water: 'hover:border-[#6390F0] focus:border-[#6390F0]',
  electric: 'hover:border-[#F7D02C] focus:border-[#F7D02C]',
  grass: 'hover:border-[#7AC74C] focus:border-[#7AC74C]',
  ice: 'hover:border-[#96D9D6] focus:border-[#96D9D6]',
  fighting: 'hover:border-[#C22E28] focus:border-[#C22E28]',
  poison: 'hover:border-[#A33EA1] focus:border-[#A33EA1]',
  ground: 'hover:border-[#E2BF65] focus:border-[#E2BF65]',
  flying: 'hover:border-[#A98FF3] focus:border-[#A98FF3]',
  psychic: 'hover:border-[#F95587] focus:border-[#F95587]',
  bug: 'hover:border-[#A6B91A] focus:border-[#A6B91A]',
  rock: 'hover:border-[#B6A136] focus:border-[#B6A136]',
  ghost: 'hover:border-[#735797] focus:border-[#735797]',
  dragon: 'hover:border-[#6F35FC] focus:border-[#6F35FC]',
  dark: 'hover:border-[#705746] focus:border-[#705746]',
  steel: 'hover:border-[#B7B7CE] focus:border-[#B7B7CE]',
  fairy: 'hover:border-[#D685AD] focus:border-[#D685AD]',
};

const borderColors = {
  normal: 'border-[#A8A77A]',
  fire: 'border-[#EE8130]',
  water: 'border-[#6390F0]',
  electric: 'border-[#F7D02C]',
  grass: 'border-[#7AC74C]',
  ice: 'border-[#96D9D6]',
  fighting: 'border-[#C22E28]',
  poison: 'border-[#A33EA1]',
  ground: 'border-[#E2BF65]',
  flying: 'border-[#A98FF3]',
  psychic: 'border-[#F95587]',
  bug: 'border-[#A6B91A]',
  rock: 'border-[#B6A136]',
  ghost: 'border-[#735797]',
  dragon: 'border-[#6F35FC]',
  dark: 'border-[#705746]',
  steel: 'border-[#B7B7CE]',
  fairy: 'border-[#D685AD]',
};

export default function PokemonCard(props) {
  /* <a target="_blank" href="https://icons8.com/icon/63311/pokeball">Pokeball</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */

  const router = useRouter();

  const type =
    props?.types[0].toLowerCase() === 'normal'
      ? props?.types.length > 1
        ? props?.types[1]?.toLowerCase()
        : 'normal'
      : props?.types[0].toLowerCase();
  // console.log('Types: ', type);

  const bHoverColor = borderHoverColors[type];
  const bColor = borderColors[type];
  // console.log('B Color: ', bColor);
  // console.log('B Hover Color: ', bHoverColor);

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
            // width={100}
            // height={100}
            fill
            // sizes='(max-width:768px):50vw,(max-width:1024px):1vw'
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
