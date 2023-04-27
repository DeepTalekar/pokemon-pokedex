import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <section className='flex flex-col justify-center items-center mt-9'>
      <p className='text-center text-base font-semibold text-neutral-900'>
        Made with ❤️ in India 🇮🇳
      </p>
      <div className='flex flex-row justify-center items-center mt-4'>
        <p className='text-center text-base font-semibold text-neutral-900 mr-2'>
          Check out me on
        </p>
        <a href='https://github.com/DeepTalekar'>
          <FontAwesomeIcon className='w-5 h-5' icon={faGithub} />
        </a>
      </div>
    </section>
  );
}
