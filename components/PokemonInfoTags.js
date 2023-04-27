import { borderColors } from '../utils/colors';

export default function PokemonInfoTags(props) {
  return (
    <div
      className={`flex flex-col flex-wrap justify-center items-start ${props?.containerStyle}`}>
      <p
        className={`mt-5 mb-4 font-semibold text-black text-xl ${props?.titleStyle}`}>
        {props?.title}
      </p>
      <div
        className={`w-full flex flex-row flex-wrap justify-start items-center ${props?.tagContainerStyle}`}>
        {props?.tags?.map((tag) => (
          <span
            key={tag}
            className={`border-2 border-solid ${borderColors[tag]} rounded-full my-2 mr-4 px-4 py-2 text-base font-bold text-black ${props?.tagStyle}`}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
