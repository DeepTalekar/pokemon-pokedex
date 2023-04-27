export default function AnthropometryCard(props) {
  return (
    <div
      className={`flex flex-col justify-start items-start p-6 rounded-2xl bg-[#ffffff] shadow-[24px_24px_48px_#d9d9d9,-24px_-24px_48px_#ffffff] ${props?.containerStyle}`}>
      <div
        className={`flex flex-row justify-center items-center ${props?.titleContainerStyle}`}>
        {props?.icon}
        <p
          className={`text-lg text-black font-semibold ml-2 ${props?.titleStyle}`}>
          {props?.title}
        </p>
      </div>
      <p className={`text-base font-medium text-black mt-4 ${props?.minStyle}`}>
        Min: {props?.min}
      </p>
      <p className={`text-base font-medium text-black mt-4 ${props?.maxStyle}`}>
        Max: {props?.max}
      </p>
    </div>
  );
}
