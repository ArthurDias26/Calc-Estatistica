import MathIcon from '../../public/Images/MathIcon.png'
import Image from 'next/image';

export default function Home() {
  return (
      <div className=" w-[600px] m-auto  rounded-xl bg-[#1a1a1a] text-white">
        <div className=" z-10 rounded-[11px] bg-[#1a1a1a] shadow-[0_0_20px_#3b82f6aa] px-6 py-8">
          <h1 className='font-bold text-center text-3xl mb-4'>Bem Vindo a Calculadora de Estatisca!</h1>
          <Image src={MathIcon} alt='Icone Matemática' className='w-[320px] block m-auto'/>
          <p className='text-center mt-4 text-lg'>Escolha uma das operações no menu acima!</p>
       </div>
      </div>
  );
}
