'use client'

import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';

export default function TAMedia() {

 const ICMSchema = Yup.object().shape({
   MargemErro: Yup.number()
     .min(0, 'O valor não pode ser negativo!')
     .required('Campo Obrigatório!'),
    Proporcao: Yup.number()
     .min(0, 'O valor não pode ser negativo!'),
    GrauConf: Yup.string()
     .min(2)
     .required('Campo Obrigatório!'),
 });

 const calcValorCritico = (grauConfianca) =>{
            if(grauConfianca == '90'){
                return 1.645
            }
            else if(grauConfianca == '95'){
                return 1.96
            }
            else{
                return 2.575
            }
        }


 function CalcICM(values){
    
    const valorCritico = calcValorCritico(values.GrauConf)
    const proporcao = values.Proporcao ? values.Proporcao : 0.5
    
    const tamanhoAmostra = Math.ceil(valorCritico ** 2 * proporcao * (1 - proporcao) / values.MargemErro **2)

    

    alert(`O tamanho da amostra é ${tamanhoAmostra}`)
    
 }

  return (
        

<div>
  <h1 className='font-bold text-center text-2xl mb-4'>Insira as informações</h1>
    <Formik
      initialValues={{
        MargemErro: '',
        Proporcao: '',
        GrauConf: ''
      }}

      validationSchema={ICMSchema}
      onSubmit={CalcICM}
    >
      <Form>
        <label htmlFor="MargemErro">Margem de Erro:</label>
        <Field className="block w-[85%] border-b-2 border-white m-auto outline-none" type='number' id="MargemErro" name="MargemErro" placeholder="" />
        <div className='text-red-600 font-bold text-center mb-8'><ErrorMessage name='MargemErro'/></div>
        

        <label htmlFor="Proporcao">Proporção:</label>
        <Field className="block w-[85%] border-b-2 border-white m-auto outline-none" type='number' id="Proporcao" name="Proporcao" placeholder="" />
        <div className='text-red-600 font-bold text-center mb-8'><ErrorMessage name='Proporcao'/></div>
        

        <div className='mb-6'>
            <h3>Grau de confiança:</h3>

            <div className='flex justify-center items-center gap-8'>
                <label>
                <Field type="radio" name="GrauConf" value="90" />
                90%
                </label>
                <label>
                <Field type="radio" name="GrauConf" value="95" />
                95%
                </label>
                <label>
                <Field type="radio" name="GrauConf" value="99" />
                99%
                </label>
            </div>
            <div className='text-red-600 font-bold text-center mb-8'><ErrorMessage name='GrauConf'/></div>
        </div>


        <button className='block m-auto py-3 px-6 cursor-pointer bg-white text-black font-bold rounded-3xl transition hover:bg-gray-300' type="submit">Submit</button>
      </Form>
    </Formik>

</div>
   
  );
}
