import {
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
} from '@heroicons/react/20/solid';

export default function PaginationButton(props) {
  return (
    <button
      disabled={props?.disabled}
      onClick={props?.onClick}
      className={`w-min flex flex-row justify-between items-center cursor-pointer text-base ${
        props?.text === 'Next'
          ? 'bg-[#E2050B] text-white'
          : 'bg-white text-black'
      } ${
        props?.disabled
          ? 'cursor-not-allowed bg-[#c7c7c7] text-gray-500'
          : 'cursor-pointer'
      } py-2 px-3 rounded-full md:text-lg md:py-3 md:px-5 ${props.className}`}>
      {props?.text === 'Prev' && (
        <ArrowSmallLeftIcon
          className='w-6 h-6 md:w-7 md:h-7'
          color={props?.disabled ? 'text-gray-500' : '#000'}
        />
      )}
      {props?.text === 'Next' ? 'Next' : 'Prev'}
      {props?.text === 'Next' && (
        <ArrowSmallRightIcon
          className='w-6 h-6 md:w-7 md:h-7'
          color={props?.disabled ? 'text-gray-500' : '#fff'}
        />
      )}
    </button>
  );
}
