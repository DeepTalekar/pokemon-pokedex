import { forwardRef } from 'react';

// eslint-disable-next-line react/display-name
const EvolveButton = forwardRef((props, ref) => {
  return (
    <button
      ref={ref}
      className={`text-black cursor-pointer py-3 px-4 outline-none border-none bg-white tracking-wider text-base font-medium uppercase shadow-[0px_8px_15px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out delay-0 rounded-full hover:text-white focus:text-white hover:translate-y-[-7px] active:translate-y-[-1px] ${props?.bgHoverColor} ${props?.buttonBoxShadow}`}
      {...props}>
      Show Evolvution!
    </button>
  );
});

export default EvolveButton;
