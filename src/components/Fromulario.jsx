import { Formik, Form, Field } from 'formik'

const Formulario = () => {
    return ( 
        <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
            <h1 className="text-gray-600 font-bold text-xl uppercase text-center">Agregar Clientes</h1>
            <Formik>
                <Form className='mt-10'>
                    <div className='mb-4'>
                        <label 
                            htmlFor="nombre"
                            className='text-gray-800'
                        >Nombre:</label>
                        <Field 
                            type='text'
                            id="nombre"
                            className="mt-2 block w-full p-3 bg-gray-50"
                            placeholder="Nombre del Cliente"
                        />
                    </div>
                    <div className='mb-4'>
                        <label 
                            htmlFor="empresa"
                            className='text-gray-800'
                        >Empresa:</label>
                        <Field 
                            type='text'
                            id="empresa"
                            className="mt-2 block w-full p-3 bg-gray-50"
                            placeholder="Empresa del Cliente"
                        />
                    </div>
                    <div className='mb-4'>
                        <label 
                            htmlFor="email"
                            className='text-gray-800'
                        >E-mail:</label>
                        <Field 
                            type='email'
                            id="email"
                            className="mt-2 block w-full p-3 bg-gray-50"
                            placeholder="Email del Cliente"
                        />
                    </div>
                    <div className='mb-4'>
                        <label 
                            htmlFor="telefono"
                            className='text-gray-800'
                        >Telefono:</label>
                        <Field 
                            type='tel'
                            id="telefono"
                            className="mt-2 block w-full p-3 bg-gray-50"
                            placeholder="Telefono del Cliente"
                        />
                    </div>
                    <div className='mb-4'>
                        <label 
                            htmlFor="notas"
                            className='text-gray-800'
                        >Notas:</label>
                        <Field 
                            as="textarea"
                            type='text'
                            id="notas"
                            className="mt-2 block w-full p-3 bg-gray-50 h-40"
                            placeholder="Notas del Cliente"
                        />
                    </div>
                    <input 
                        type="submit" 
                        value='Agregar Nuevo Cliente'
                        className='mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg cursor-pointer hover:bg-blue-900'
                    />
                </Form>
            </Formik>
        </div>
     );
}
 
export default Formulario;