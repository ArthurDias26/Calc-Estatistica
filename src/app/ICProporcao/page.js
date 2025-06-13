'use client'

import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';

export default function ICProporcao() {

 const ICMSchema = Yup.object().shape({
   Amostra: Yup.number()
     .min(0, 'O valor não pode ser negativo!')
     .required('Campo Obrigatório!'),
   Nsucesso: Yup.number()
     .min(0, 'O valor não pode ser negativo!')
     .required('Campo Obrigatório!'),
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
    
    const Proporcao = values.Nsucesso / values.Amostra
    const valorCritico = calcValorCritico(values.GrauConf)
    const margemErro = valorCritico * Math.sqrt(Proporcao * (1 - Proporcao) / values.Amostra)
    const IC = [(Proporcao - margemErro).toFixed(2), (Proporcao + margemErro).toFixed(2)]

    alert(`O intervalo de confiaça é ${IC[0]} < u > ${IC[1]}`)
    

 }

  return (
        

<div>
  <h1 className='font-bold text-center text-2xl mb-4'>Insira as informações</h1>
    <Formik
      initialValues={{
        Amostra: '',
        Nsucesso: '',
        GrauConf: ''
      }}

      validationSchema={ICMSchema}
      onSubmit={CalcICM}
    >
      <Form>
        <label htmlFor="Amostra">Tamanho da Amostra:</label>
        <Field className="block w-[85%] border-b-2 border-white m-auto outline-none" type='number' id="Amostra" name="Amostra" placeholder="" />
        <div className='text-red-600 font-bold text-center mb-8'><ErrorMessage name='Amostra'/></div>
        

        <label htmlFor="Nsucesso">Número de Sucessos:</label>
        <Field className="block w-[85%] border-b-2 border-white m-auto outline-none" type='number' id="Nsucesso" name="Nsucesso" placeholder="" />
        <div className='text-red-600 font-bold text-center mb-8'><ErrorMessage name='Nsucesso'/></div>
        

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
