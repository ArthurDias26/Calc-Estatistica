import MathIcon from '../../public/Images/MathIcon.png'
import Image from 'next/image';

export default function Home() {
  return (
      <div>
          <h1 className='font-bold text-center text-3xl mb-4'>Bem Vindo a Calculadora de Estatisca!</h1>
          <Image src={MathIcon} alt='Icone Matemática' className='w-[260px] md:w-[320px] block m-auto'/>
          <p className='text-center mt-4 text-lg'>Escolha uma das operações no menu acima!</p>
      </div>
  );
}
